import { readFile, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { resolve, relative, isAbsolute } from "node:path";
import { pathToFileURL } from "node:url";

const hash = bytes => createHash("sha256").update(bytes).digest("hex");

export async function verifyAssets(root, inventory) {
  const errors = [];
  const safePath = path => {
    const absolute = resolve(root, path);
    const rel = relative(root, absolute);
    if (isAbsolute(rel) || rel === ".." || rel.startsWith("../") || rel.startsWith("..\\")) throw new Error(`Caminho fora do projeto: ${path}`);
    return absolute;
  };
  if (inventory.version !== 2 || JSON.stringify(inventory.roots) !== '["assets","public"]') throw new Error("Versão/raízes do inventário inválidas.");
  const original = await readFile(safePath(inventory.historicalManifest.path));
  if (hash(original) !== inventory.historicalManifest.sha256) errors.push("Manifesto histórico alterado.");
  const history = JSON.parse(original);
  const expected = new Map();
  for (const file of inventory.files) {
    safePath(file.path);
    if (!inventory.roots.some(dir => file.path.startsWith(`${dir}/`)) || expected.has(file.path)) errors.push(`Entrada inválida/duplicada: ${file.path}`);
    expected.set(file.path, file);
  }
  async function walk(dir) {
    const entries = await readdir(safePath(dir), { withFileTypes: true });
    return (await Promise.all(entries.map(entry => {
      const path = `${dir}/${entry.name}`;
      if (entry.isSymbolicLink()) { errors.push(`Link simbólico não permitido: ${path}`); return []; }
      return entry.isDirectory() ? walk(path) : [path];
    }))).flat();
  }
  const paths = (await Promise.all(inventory.roots.map(walk))).flat();
  const actual = new Map();
  for (const path of paths) {
    const bytes = await readFile(safePath(path));
    actual.set(path, hash(bytes));
    const file = expected.get(path);
    if (!file) errors.push(`Adicionado sem registro: ${path}`);
    else if (file.sha256 !== actual.get(path) || file.bytes !== bytes.length) errors.push(`Alterado: ${path}`);
  }
  for (const path of expected.keys()) if (!actual.has(path)) errors.push(`Ausente: ${path}`);
  for (const file of inventory.files) {
    const aliases = inventory.files.filter(other => other.sha256 === file.sha256 && other.path !== file.path).map(other => other.path).sort();
    if (JSON.stringify(aliases) !== JSON.stringify([...file.aliases].sort())) errors.push(`Aliases divergentes: ${file.path}`);
  }
  const historicalHashes = [...new Set(history.map(file => file.sha256))];
  if (inventory.history.length !== historicalHashes.length) errors.push("Quantidade de registros históricos divergente.");
  for (const sha256 of historicalHashes) {
    const records = inventory.history.filter(record => record.sha256 === sha256);
    const record = records[0];
    if (records.length !== 1) { errors.push(`Histórico sem registro único: ${sha256}`); continue; }
    const historicalPaths = history.filter(file => file.sha256 === sha256).map(file => file.path).sort();
    const currentPaths = inventory.files.filter(file => file.sha256 === sha256).map(file => file.path).sort();
    if (JSON.stringify([...record.historicalPaths].sort()) !== JSON.stringify(historicalPaths) || JSON.stringify([...record.currentPaths].sort()) !== JSON.stringify(currentPaths)) errors.push(`Rastreabilidade divergente: ${sha256}`);
    if (record.status === "deleted-intentionally") {
      if (!record.authorization || !record.reason || currentPaths.length) errors.push(`Exclusão sem justificativa/autorização ou conteúdo reintroduzido: ${sha256}`);
      if ([...actual.values()].includes(sha256)) errors.push(`Exclusão intencional reintroduzida: ${sha256}`);
    } else if (!["preserved", "archived"].includes(record.status) || !currentPaths.length) errors.push(`Conteúdo histórico ausente sem autorização: ${sha256}`);
  }
  const additions = inventory.files.filter(file => !historicalHashes.includes(file.sha256)).map(file => file.path).sort();
  if (JSON.stringify(additions) !== JSON.stringify([...inventory.additions].sort())) errors.push("Adições divergentes do registro versionado.");
  return { errors, files: paths.length, archived: inventory.history.filter(record => record.status === "archived").length, deletedIntentionally: inventory.history.filter(record => record.status === "deleted-intentionally").length };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const root = resolve(import.meta.dirname, "..");
  const inventory = JSON.parse(await readFile(resolve(root, "docs/assets-audit/inventory-v2.json"), "utf8"));
  const result = await verifyAssets(root, inventory);
  if (result.errors.length) { console.error(result.errors.join("\n")); process.exitCode = 1; }
  else console.log(`Inventário v2 aprovado: ${result.files} arquivos conferidos por caminho/tamanho/SHA-256; ${result.archived} conteúdos arquivados; ${result.deletedIntentionally} exclusão intencional autorizada. Manifesto histórico preservado.`);
}
