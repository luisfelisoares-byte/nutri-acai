import { pathToFileURL } from "node:url";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import assert from "node:assert/strict";

const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href);
const base = process.env.PREVIEW_URL || "http://127.0.0.1:3001";
const filename = "Nutri_Acai_Catalogo_Mobile_2026_V7.pdf";
const href = `/catalogo/${filename}`;
const hash = bytes => createHash("sha256").update(bytes).digest("hex");
const expected = hash(await readFile(`assets/catalogo/${filename}`));
assert.equal(hash(await readFile(`public/catalogo/${filename}`)), expected);
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true });
const result = { http: {}, layouts: [], download: {}, popup: {}, errors: [] };
await mkdir("docs/catalogo-integration", { recursive: true });
try {
  const page = await browser.newPage({ acceptDownloads: true, reducedMotion: "reduce" });
  page.on("pageerror", e => result.errors.push(e.message));
  const requested = [];
  page.on("request", r => requested.push(r.url()));
  await page.goto(base, { waitUntil: "networkidle" });
  assert.equal(requested.some(u => u.includes(filename)), false, "PDF carregado sem clique");
  const response = await page.request.get(base + href);
  assert.equal(response.status(), 200);
  assert.match(response.headers()["content-type"], /application\/pdf/);
  assert.equal(hash(await response.body()), expected);
  const head = await page.request.head(base + href);
  const range = await page.request.get(base + href, { headers: { Range: "bytes=0-1023" } });
  result.http = { status: response.status(), contentType: response.headers()["content-type"], sha256: expected, bytes: (await response.body()).length, headStatus: head.status(), rangeStatus: range.status(), contentRange: range.headers()["content-range"], noPreload: true };
  const view = page.getByRole("link", { name: "Ver catálogo completo", exact: false });
  const download = page.getByRole("link", { name: "Baixar catálogo PDF", exact: true });
  assert.equal(await view.getAttribute("href"), href);
  assert.equal(await view.getAttribute("target"), "_blank");
  assert.equal(await download.getAttribute("href"), href);
  assert.equal(await download.getAttribute("download"), filename);
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.evaluate(() => scrollTo(0, 0));
    const box = await page.getByLabel("Catálogo completo em PDF").boundingBox();
    const checks = await Promise.all([view, download].map(async link => {
      const bounds = await link.boundingBox();
      return { inViewport: bounds.x >= 0 && bounds.x + bounds.width <= width + 1, height: bounds.height };
    }));
    checks.forEach(c => { assert.equal(c.inViewport, true); assert.ok(c.height >= 44); });
    const pageOverflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    const overflowWithoutCatalog = await page.getByLabel("Catálogo completo em PDF").evaluate(e => {
      const previous = e.style.display;
      e.style.display = "none";
      const overflow = document.documentElement.scrollWidth > innerWidth;
      e.style.display = previous;
      return overflow;
    });
    result.layouts.push({ width, catalogBounds: box, links: checks, pageOverflow, overflowWithoutCatalog });
    await page.screenshot({ path: `docs/catalogo-integration/home-${width}.png` });
    await page.getByLabel("Catálogo completo em PDF").screenshot({ path: `docs/catalogo-integration/catalog-${width}.png` });
  }
  await view.focus();
  assert.notEqual(await view.evaluate(e => getComputedStyle(e).outlineStyle), "none");
  const downloaded = page.waitForEvent("download");
  await download.click();
  const file = await downloaded;
  assert.equal(file.suggestedFilename(), filename);
  assert.equal(hash(await readFile(await file.path())), expected);
  result.download = { filename: file.suggestedFilename(), sha256: expected, clicked: true };
  const opened = page.waitForEvent("popup");
  await view.click();
  const popup = await opened;
  await popup.waitForLoadState("load").catch(() => {});
  result.popup = { url: popup.url(), opened: true };
  assert.equal(popup.url(), base + href);
  await popup.waitForTimeout(4000);
  await popup.screenshot({ path: "docs/catalogo-integration/pdf-browser.png" });
  assert.equal(result.errors.length, 0);
  await writeFile("docs/catalogo-integration/results.json", JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
} finally { await browser.close(); }
