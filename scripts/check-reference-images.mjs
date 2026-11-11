import { pathToFileURL } from 'node:url';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href);
const base = process.env.PREVIEW_URL;
const output = 'docs/images-preview';
const associations = JSON.parse(await readFile(output + '/product-associations.json', 'utf8'));
const expected = new Map(associations.map(item => [item.sku, item.public.replaceAll('\\', '/').replace(/^public/, '')]));
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true });
const results = { base, widths: [], errors: [] };
try {
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  page.on('pageerror', e => results.errors.push(e.message));
  for (const width of [320, 375, 768, 900, 1100, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of ['/', '/produtos', '/fornecedores']) {
      assert.equal((await page.goto(base + route)).status(), 200);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), width);
      if (route === '/') {
        for (const variant of ['hero', 'about']) {
          const figure = page.locator(`[data-reference-image="${variant}"]`);
          await figure.scrollIntoViewIfNeeded();
          await figure.locator('img').evaluate(img => img.decode());
          assert.equal(await figure.locator('img').evaluate(img => img.complete && img.naturalWidth > 0), true);
          assert.match(await figure.textContent(), /ilustrativa e provisória/);
          await figure.screenshot({ path: `${output}/${variant}-${width}.png` });
        }
        assert.equal(await page.locator('#trabalhe-conosco button').isDisabled(), true);
      } else if (route === '/produtos') {
        assert.equal(await page.locator('[data-product-id]').count(), 25);
        assert.equal(await page.locator('[data-product-id] .media-placeholder').count(), 12);
        await page.locator('[data-product-id]').first().screenshot({ path: `${output}/product-${width}.png` });
      }
      const photos = page.locator('[data-product-image]');
      assert.equal(await photos.count(), route === '/' ? 1 : route === '/produtos' ? 13 : 0);
      for (const photo of await photos.all()) {
        await photo.scrollIntoViewIfNeeded();
        await photo.locator('img').evaluate(img => img.decode());
        assert.equal(await photo.locator('img').evaluate(img => img.complete && img.naturalWidth > 0 && getComputedStyle(img).objectFit === 'contain'), true);
        const id = await photo.getAttribute('data-product-image');
        const source = await photo.locator('img').evaluate(img => new URL(img.currentSrc).searchParams.get('url'));
        assert.equal(source, expected.get(id));
        const box = await photo.boundingBox();
        assert.ok(Math.abs(box.width / box.height - 0.8) < 0.005);
        assert.notEqual(id, 'acai-trufado-leitinho-1-5l');
        await photo.screenshot({ path: `${output}/${id}-${width}.png` });
      }
      if (route === '/') for (const selector of ['#linhas', '.products-section', '#negocios', '#sobre', '#trabalhe-conosco', '#contato']) {
        await page.locator(selector).screenshot({ style: '.site-header, .skip-link { visibility: hidden !important; }', path: `${output}/home-${selector.replace(/[#.]/g, '')}-${width}.png` });
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      if (width < 900) await page.locator('.menu-toggle').click();
      const boxes = await page.locator('.site-header .brand, .navigation a').evaluateAll(es => es.map(e => {
        const r = e.getBoundingClientRect(); return { left: r.left, right: r.right, top: r.top, bottom: r.bottom };
      }));
      for (const box of boxes) assert.ok(box.left >= 0 && box.right <= width);
      for (let i = 0; i < boxes.length; i++) for (let j = i + 1; j < boxes.length; j++) {
        const a = boxes[i], b = boxes[j]; assert.ok(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top);
      }
      await page.locator('.site-header').screenshot({ path: `${output}/header-${route === '/' ? 'home' : route.slice(1)}-${width}.png` });
      if (width < 900) await page.keyboard.press('Escape');
      await page.locator('.site-footer').scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await page.locator('.site-footer').screenshot({ path: `${output}/footer-${route === '/' ? 'home' : route.slice(1)}-${width}.png` });
      results.widths.push({ route, width, imagesLoaded: route === '/' ? 3 : route === '/produtos' ? 13 : 0, productPlaceholders: route === '/' ? 2 : route === '/produtos' ? 12 : 0, overflow: false, headerOverlap: false });
    }
  }
  results.faviconStatus = (await page.request.get(base + '/favicon.ico')).status();
  assert.equal(results.faviconStatus, 404);
  assert.deepEqual(results.errors, []);
  await writeFile(`${output}/results.json`, JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
} finally { await browser.close(); }
