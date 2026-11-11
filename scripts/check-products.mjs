import { pathToFileURL } from 'node:url';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href);
const base = process.env.PREVIEW_URL || 'http://127.0.0.1:3003';
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true });
const results = { widths: [], categories: [], errors: [] };
await mkdir('docs/products-preview', { recursive: true });
try {
  const page = await browser.newPage({ reducedMotion: 'reduce', acceptDownloads: true });
  page.on('pageerror', e => results.errors.push(e.message));
  assert.equal((await page.goto(base + '/produtos')).status(), 200);
  const cards = page.locator('[data-product-id]');
  assert.equal(await cards.count(), 25);
  assert.equal(new Set(await cards.evaluateAll(es => es.map(e => e.dataset.productId))).size, 25);
  assert.equal(await page.getByText(/pitaya/i).count(), 0);
  assert.equal(await page.locator('a[href^="/produtos/"]').count(), 0);
  const expectedCategories = ['Tradicionais', 'Frutados', 'Frozen', 'Cremes', 'Trufados', 'Linha Saudável'];
  assert.deepEqual(await page.locator('#categoria option').allTextContents(), ['Todas as categorias', ...expectedCategories]);
  const expectedVolumes = ['200 ml', '220 ml', '1,5 L', '3,6 L', '5 L', '10 L', '12 L'];
  assert.deepEqual(await page.locator('#volume option').allTextContents(), ['Todos os volumes', ...expectedVolumes]);
  const initialIds = await cards.evaluateAll(es => es.map(e => e.dataset.productId).sort());
  const source = await readFile('src/content/products.ts', 'utf8');
  const records = JSON.parse(source.match(/export const products: readonly Product\[\] = (\[[\s\S]*\]);/)[1]);
  assert.deepEqual(initialIds, records.map(p => p.id).sort());
  const checkOrder = async () => {
    const observed = {};
    for (const name of expectedCategories) {
      const group = page.getByRole('region', { name, exact: true });
      if (await group.count()) {
        const labels = await group.locator('.volume-tag').allTextContents();
        const rank = labels.map(v => expectedVolumes.indexOf(v));
        assert.ok(rank.every(n => n >= 0));
        assert.deepEqual(rank, [...rank].sort((a,b) => b-a), `Ordem incorreta: ${name}`);
        const ids = await group.locator('[data-product-id]').evaluateAll(es => es.map(e => e.dataset.productId));
        const expectedIds = records.filter(p => p.category === name && ids.includes(p.id))
          .sort((a,b) => expectedVolumes.indexOf(b.volume) - expectedVolumes.indexOf(a.volume)).map(p => p.id);
        assert.deepEqual(ids, expectedIds, `Desempate instável: ${name}`);
        observed[name] = labels;
      }
    }
    return observed;
  };
  results.order = await checkOrder();
  assert.deepEqual(await page.getByRole('region', { name: 'Frozen', exact: true }).locator('h4').allTextContents(), ['Frozen Natural', 'Frozen Morango']);
  assert.deepEqual(await page.getByRole('region', { name: 'Cremes', exact: true }).locator('h4').allTextContents(), ['Creme de Cupuaçu', 'Creme de Leitinho']);
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.evaluate(() => scrollTo(0,0));
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    assert.equal(scrollWidth, width);
    await page.screenshot({ path: `docs/products-preview/top-${width}.png` });
    await cards.first().screenshot({ path: `docs/products-preview/card-${width}.png` });
    if (width < 900) { await page.locator('.menu-toggle').click(); assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), width); await page.keyboard.press('Escape'); }
    results.widths.push({ width, scrollWidth });
  }
  for (const [category, count] of [['Tradicionais',8],['Frutados',6],['Frozen',2],['Cremes',2],['Trufados',4],['Linha Saudável',3]]) {
    await page.getByLabel('Categoria', { exact: true }).selectOption(category);
    await page.getByRole('button', { name: 'Aplicar filtros' }).click();
    await page.waitForURL(url => url.searchParams.get('categoria') === category);
    assert.equal(await cards.count(), count);
    await checkOrder();
    results.categories.push({ category, count });
  }
  await page.getByLabel('Volume', { exact: true }).selectOption('200 ml');
  await page.getByRole('button', { name: 'Aplicar filtros' }).click();
  await page.waitForURL(url => url.searchParams.get('volume') === '200 ml');
  assert.equal(await cards.count(), 1);
  assert.match(await cards.innerText(), /Açaí Zero Açúcar/);
  await page.getByLabel('Categoria', { exact: true }).selectOption('Trufados');
  await page.getByRole('button', { name: 'Aplicar filtros' }).click();
  await page.waitForURL(url => url.searchParams.get('categoria') === 'Trufados');
  assert.equal(await cards.count(), 0);
  assert.equal(await page.getByText('Nenhum produto corresponde a essa combinação de categoria e volume.').count(), 1);
  await page.getByRole('link', { name: 'Limpar filtros' }).click();
  await page.waitForURL(url => !url.search);
  assert.equal(await cards.count(), 25);
  results.volumes = [];
  for (const v of expectedVolumes) {
    await page.getByLabel('Volume', { exact: true }).selectOption(v);
    await page.getByRole('button', { name: 'Aplicar filtros' }).click();
    await page.waitForURL(url => url.searchParams.get('volume') === v);
    const expected = records.filter(p => p.volume === v).map(p => p.id).sort();
    assert.deepEqual(await cards.evaluateAll(es => es.map(e => e.dataset.productId).sort()), expected);
    await checkOrder();
    results.volumes.push({ volume: v, count: expected.length });
  }
  results.combinations = 0;
  for (const category of expectedCategories) {
    for (const volume of expectedVolumes) {
      await page.goto(base + '/produtos?' + new URLSearchParams({ categoria: category, volume }));
      const expected = records.filter(p => p.category === category && p.volume === volume).map(p => p.id);
      assert.deepEqual(await cards.evaluateAll(es => es.map(e => e.dataset.productId)), expected);
      await checkOrder();
      results.combinations++;
    }
  }
  await page.goto(base + '/produtos?categoria=inexistente');
  assert.equal(await cards.count(), 0);
  assert.equal(await page.getByText('Não reconhecemos os filtros deste endereço.').count(), 1);
  await page.goto(base + '/produtos');
  await page.getByLabel('Categoria', { exact: true }).focus();
  await page.keyboard.press('ArrowDown'); await page.keyboard.press('Tab'); await page.keyboard.press('Tab');
  assert.equal(await page.getByRole('button', { name: 'Aplicar filtros' }).evaluate(e => e === document.activeElement), true);
  await page.keyboard.press('Enter');
  await page.waitForURL(url => url.searchParams.get('categoria') === 'Tradicionais');
  assert.equal(await cards.count(), 8);
  results.keyboard = true;
  await page.goto(base + '/produtos');
  for (const card of await cards.all()) {
    const href = await card.getByRole('link').getAttribute('href');
    const url = new URL(href);
    assert.equal(url.origin + url.pathname, 'https://wa.me/5551992485496');
    assert.ok(url.searchParams.get('text').includes(await card.locator('h4').innerText()));
  }
  const pdf = '/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf';
  const hash = b => createHash('sha256').update(b).digest('hex');
  const expected = hash(await readFile('assets' + pdf));
  assert.equal(hash(await readFile('public' + pdf)), expected);
  const response = await page.request.get(base + pdf);
  assert.equal(response.status(), 200); assert.match(response.headers()['content-type'], /application\/pdf/);
  assert.equal(hash(await response.body()), expected);
  const downloading = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Baixar catálogo PDF' }).click();
  assert.equal(hash(await readFile(await (await downloading).path())), expected);
  const opening = page.waitForEvent('popup');
  await page.getByRole('link', { name: /Ver catálogo completo/ }).click();
  const popup = await opening; await popup.waitForLoadState('load'); assert.equal(popup.url(), base + pdf); await popup.close();
  results.pdf = { status: 200, sha256: expected, download: true, popup: true };
  const nojs = await browser.newContext({ javaScriptEnabled: false });
  const plain = await nojs.newPage(); await plain.goto(base + '/produtos');
  await plain.getByLabel('Categoria', { exact: true }).selectOption('Frutados');
  await plain.getByRole('button', { name: 'Aplicar filtros' }).click();
  await plain.waitForURL(url => url.searchParams.get('categoria') === 'Frutados');
  assert.equal(await plain.locator('[data-product-id]').count(), 6); results.withoutJavaScript = true;
  await nojs.close();
  assert.equal((await page.request.get(base + '/produtos/acai-zero-acucar-200ml')).status(), 404);
  await page.goto(base); await page.setViewportSize({ width: 900, height: 1000 });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), 900);
  await page.locator('#main-navigation').getByRole('link', { name: 'Produtos', exact: true }).click();
  await page.waitForURL(base + '/produtos');
  assert.equal(results.errors.length, 0);
  await writeFile('docs/products-preview/results.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
} finally { await browser.close(); }
