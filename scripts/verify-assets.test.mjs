import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, unlink, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { verifyAssets } from './verify-assets.mjs';
const hash = value => createHash('sha256').update(value).digest('hex');
async function fixture(run) {
  const root = await mkdtemp(join(tmpdir(), 'nutri-verify-'));
  try {
    await mkdir(join(root, 'assets')); await mkdir(join(root, 'public'));
    await writeFile(join(root, 'assets/original.txt'), 'preserved');
    const old = JSON.stringify([{ path: 'assets/old.txt', sha256: hash('preserved') }, { path: 'assets/retired.txt', sha256: hash('retired-test-fixture') }]);
    await writeFile(join(root, 'history.json'), old);
    const inventory = { version: 2, roots: ['assets', 'public'], historicalManifest: { path: 'history.json', sha256: hash(old) }, files: [{ path: 'assets/original.txt', sha256: hash('preserved'), bytes: 9, aliases: [] }], additions: [], history: [{ sha256: hash('preserved'), historicalPaths: ['assets/old.txt'], currentPaths: ['assets/original.txt'], status: 'preserved' }, { sha256: hash('retired-test-fixture'), historicalPaths: ['assets/retired.txt'], currentPaths: [], status: 'deleted-intentionally', reason: 'Test fixture only', authorization: 'Test fixture only' }] };
    await run(root, inventory);
  } finally {
    const rel = relative(resolve(tmpdir()), resolve(root));
    if (isAbsolute(rel) || rel.startsWith('..') || !rel.startsWith('nutri-verify-')) throw Error('Unsafe fixture cleanup');
    await rm(root, { recursive: true, force: true });
  }
}
test('accepts exact files with documented historical relocation/deletion', () => fixture(async (root, inventory) => assert.deepEqual((await verifyAssets(root, inventory)).errors, [])));
test('detects changed contents', () => fixture(async (root, inventory) => { await writeFile(join(root, 'assets/original.txt'), 'tampered!'); assert.ok((await verifyAssets(root, inventory)).errors.some(e => e.startsWith('Alterado:'))); }));
test('detects missing files', () => fixture(async (root, inventory) => { await unlink(join(root, 'assets/original.txt')); assert.ok((await verifyAssets(root, inventory)).errors.some(e => e.startsWith('Ausente:'))); }));
test('rejects unregistered additions', () => fixture(async (root, inventory) => { await writeFile(join(root, 'public/unregistered.txt'), 'new'); assert.ok((await verifyAssets(root, inventory)).errors.some(e => e.startsWith('Adicionado sem registro:'))); }));
test('requires authorization for intentional deletion', () => fixture(async (root, inventory) => { delete inventory.history[1].authorization; assert.ok((await verifyAssets(root, inventory)).errors.some(e => e.startsWith('Exclusão sem justificativa'))); }));
test('detects reintroduced retired fixture content under another name', () => fixture(async (root, inventory) => { await writeFile(join(root, 'public/reintroduced.txt'), 'retired-test-fixture'); assert.ok((await verifyAssets(root, inventory)).errors.some(e => e.startsWith('Exclusão intencional reintroduzida:'))); }));
test('detects modification to immutable historical manifest', () => fixture(async (root, inventory) => { await writeFile(join(root, 'history.json'), (await readFile(join(root, 'history.json'), 'utf8')) + '\n'); assert.ok((await verifyAssets(root, inventory)).errors.includes('Manifesto histórico alterado.')); }));
test('rejects manifest paths outside workspace', () => fixture(async (root, inventory) => { inventory.files[0].path = '../escape.txt'; await assert.rejects(verifyAssets(root, inventory), /Caminho fora do projeto/); }));
