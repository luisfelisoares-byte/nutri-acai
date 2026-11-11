import { pathToFileURL } from 'node:url';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href);
const base = process.env.PREVIEW_URL || 'http://127.0.0.1:3008';
const output = 'docs/harmonization-preview';
const hash = data => createHash('sha256').update(data).digest('hex');
const categories = ['Tradicionais', 'Frutados', 'Frozen', 'Cremes', 'Trufados', 'Linha Saudável'];
const results = { base, routes: [], widths: [], links: [], errors: [], integrity: {} };
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true });
await mkdir(output, { recursive: true });
try {
 const page = await browser.newPage({ reducedMotion: 'reduce' });
 page.on('pageerror', error => results.errors.push(error.message));
 const linkPage = await browser.newPage();
 for (const route of ['/', '/produtos', '/fornecedores']) {
  const response = await page.goto(base + route);
  assert.equal(response.status(), 200);
  results.routes.push({ route, status: response.status(), robots: response.headers()['x-robots-tag'] });
  assert.equal(response.headers()['x-robots-tag'], 'noindex, nofollow, noarchive');
  const links = [...new Set(await page.locator('a[href]').evaluateAll(es => es.map(e => e.getAttribute('href'))))];
  for (const href of links) {
   const url = new URL(href, base + route);
   if (url.origin !== base) {
    assert.ok(['https://wa.me/5551992485496', 'https://commons.wikimedia.org/wiki/File:Acai_Smoothie_Bowls_(Unsplash).jpg', 'https://commons.wikimedia.org/wiki/File:Stainless_steel_fermentation_tank.jpg', 'https://creativecommons.org/publicdomain/zero/1.0/', 'https://creativecommons.org/licenses/by/2.0/'].includes(url.origin + url.pathname));
    results.links.push({ route, href, checked: 'URL comercial ou cr�dito de imagem conferido, sem envio externo' });
    continue;
   }
   const target = await page.request.get(url.href); assert.equal(target.status(), 200);
   if (url.hash) { await linkPage.goto(url.href); assert.equal(await linkPage.locator(url.hash).count(), 1); }
   results.links.push({ route, href, status: target.status() });
  }
  for (const width of [320, 375, 768, 900, 1100, 1440]) {
   await page.setViewportSize({ width, height: 1000 }); await page.goto(base + route);
   const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
   assert.equal(scrollWidth, width, `${route} overflow ${width}`);
   let menuScrollWidth = null;
   if (width < 900) {
    const toggle = page.locator('button[aria-controls="main-navigation"]'); await toggle.click();
    assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
    menuScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth); assert.equal(menuScrollWidth, width);
    await page.keyboard.press('Escape'); assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
   }
   results.widths.push({ route, width, scrollWidth, menuScrollWidth });
   if (route === '/' && [320, 375, 768, 1440].includes(width)) {
    assert.deepEqual(await page.locator('#linhas h3').allTextContents(), categories);
    const section = page.locator('#trabalhe-conosco');
    const button = section.getByRole('button', { name: 'Enviar currículo pelo WhatsApp', exact: true });
    assert.equal(await button.isDisabled(), true);
    assert.equal(await section.locator('a,form,input').count(), 0);
    assert.match(await section.innerText(), /PDF/); assert.match(await section.innerText(), /nome e a área ou vaga/);
    assert.match(await section.innerText(), /contato oficial do RH/);
    assert.equal(await page.locator('#sobre').count(), 1);
    await page.locator('#linhas').screenshot({ path: `${output}/lines-${width}.png` });
    await section.screenshot({ path: `${output}/careers-${width}.png` });
   }
  }
 }
 await page.goto(base + '/produtos');
 assert.equal(await page.locator('[data-product-id]').count(), 25);
 assert.deepEqual(await page.locator('#categoria option').allTextContents(), ['Todas as categorias', ...categories]);
 await page.locator('#categoria').selectOption('Linha Saudável'); await page.locator('#volume').selectOption('200 ml');
 await page.getByRole('button', { name: 'Aplicar filtros' }).click();
 assert.deepEqual(await page.locator('[data-product-id]').evaluateAll(es => es.map(e => e.dataset.productId)), ['acai-zero-acucar-200ml']);
 await page.getByRole('link', { name: 'Limpar filtros', exact: true }).click();
 assert.equal(await page.locator('[data-product-id]').count(), 25);
 results.products = { count: 25, categories, filterZero200: true, clear: true };
 await page.goto(base + '/fornecedores');
 assert.equal(await page.locator('[data-supplier-id]').count(), 1);
 assert.equal(await page.locator('[data-supplier-id] a').count(), 0);
 results.suppliers = { demoCount: 1, activeSupplierLinks: 0 };
 await page.locator('#main-navigation').getByRole('link', { name: 'Sobre a Nutri', exact: true }).click();
 assert.equal(new URL(page.url()).hash, '#sobre');
 await page.getByRole('navigation', { name: 'Navegação do rodapé' }).getByRole('link', { name: 'Trabalhe Conosco', exact: true }).click();
 assert.equal(new URL(page.url()).hash, '#trabalhe-conosco');
 await page.locator('#main-navigation').getByRole('link', { name: 'Fornecedores', exact: true }).click();
 assert.equal(new URL(page.url()).pathname, '/fornecedores');
 const inventory = JSON.parse(await readFile('docs/assets-audit/metadata.json', 'utf8'));
 for (const item of inventory) assert.equal(hash(await readFile(item.path)), item.sha256);
 const protectedFiles = JSON.parse(await readFile('docs/suppliers-preview/preserved-before.json', 'utf8'));
 for (const item of protectedFiles) {
  const data = await readFile(item.Path);
  if (item.Path.replaceAll('\\', '/').endsWith('/src/app/produtos/page.tsx')) {
    const restored = data.toString().replace('import { ProductImage } from "@/components/media/ProductImage";', 'import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";').replace('<ProductImage id={product.id} name={product.name} volume={product.volume} tone=', '<MediaPlaceholder tone=').replaceAll('\r\n', '\n');
    assert.ok([hash(restored), hash(restored.replaceAll('\n', '\r\n'))].includes(item.Hash.toLowerCase()), 'Somente a integracao de midia pode mudar na pagina Produtos');
  } else assert.equal(hash(data), item.Hash.toLowerCase());
 }
 results.integrity = { originalAssets: inventory.length, protectedFilesUnchanged: protectedFiles.length - 1, productsPageOnlyMediaChanged: true };
 const pdf = await page.request.get(base + '/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf');
 assert.equal(pdf.status(), 200); assert.equal(hash(await pdf.body()), '8719d38b610810d14305c9b1757a862dc779de098b6611ba65fc6e22272052e5');
 results.pdf = { status: 200, hashPreserved: true };
 const robots = await page.request.get(base + '/robots.txt'); assert.match(await robots.text(), /Disallow: \//);
 results.robotsPreserved = true;
 assert.deepEqual(results.errors, []);
 await writeFile(`${output}/results.json`, JSON.stringify(results, null, 2));
 console.log(JSON.stringify({ ...results, links: results.links.length }, null, 2));
} finally { await browser.close(); }
