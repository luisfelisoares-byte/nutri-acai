import { pathToFileURL } from 'node:url';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href);
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true });
try {
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  const results = [];
  await mkdir('docs/responsive', { recursive: true });
  await page.goto('http://127.0.0.1:3002');
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    const result = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth,
      elements: [...document.querySelectorAll('.business-card, .business-card h3, .about-grid, .about-grid > *, .hero > *')].map(e => { const r=e.getBoundingClientRect(); return { element:e.className || e.tagName, left:r.left, right:r.right, width:r.width, scroll:e.scrollWidth }; })
    }));
    results.push(result);
    assert.equal(result.scroll, width);
    const catalog = page.getByLabel('Catálogo completo em PDF');
    for (const link of await catalog.getByRole('link').all()) {
      const box = await link.boundingBox();
      assert.ok(box.x >= 0 && box.x + box.width <= width && box.height >= 44);
      assert.equal(await link.getAttribute('href'), '/catalogo/Nutri_Acai_Catalogo_Mobile_2026_V7.pdf');
    }
    await page.locator('.about-grid').screenshot({ path: `docs/responsive/about-${width}.png` });
    await catalog.screenshot({ path: `docs/responsive/catalog-${width}.png` });
    await page.screenshot({ path: `docs/responsive/home-${width}.png`, fullPage: true });
    if (width < 900) {
      const menu = page.locator('.menu-toggle');
      await menu.click();
      assert.equal(await menu.getAttribute('aria-expanded'), 'true');
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), width);
      await page.keyboard.press('Escape');
      assert.equal(await menu.getAttribute('aria-expanded'), 'false');
    }
  }
  await writeFile('docs/responsive/results.json', JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results));
} finally { await browser.close(); }
