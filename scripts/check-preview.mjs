// Usa Playwright e Chrome existentes no ambiente, sem dependência de runtime no site.
// PLAYWRIGHT_MODULE e CHROME_PATH devem apontar para instalações locais.
import { pathToFileURL } from "node:url";
import { mkdir, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";

if (!process.env.PLAYWRIGHT_MODULE || !process.env.CHROME_PATH) throw new Error("Defina PLAYWRIGHT_MODULE e CHROME_PATH para executar a conferência.");
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href);
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true });
const report = { widths: [], errors: [], externalRequests: [], checks: [] };
await mkdir("docs/preview", { recursive: true });
try {
  const page = await browser.newPage({ reducedMotion: "reduce" });
  page.on("pageerror", error => report.errors.push(error.message));
  page.on("console", msg => { if (msg.type() === "error") report.errors.push(msg.text()); });
  page.on("request", request => { if (!new URL(request.url()).hostname.match(/^(127\.0\.0\.1|localhost)$/)) report.externalRequests.push(request.url()); });
  const response = await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  assert.equal(response.status(), 200);
  assert.match(response.headers()["x-robots-tag"], /noindex/);
  assert.equal(await page.locator("html").getAttribute("lang"), "pt-BR");
  assert.equal(await page.locator("h1").count(), 1);
  assert.equal(await page.locator("img, video, iframe").count(), 0);
  assert.equal(await page.locator(".product-card").filter({ hasText: "Açaí Zero Açúcar" }).locator(".volume-tag").textContent(), "200 ml");
  assert.doesNotMatch(await page.locator("main").innerText(), /pitaya/i);
  report.checks.push("HTTP 200; idioma; H1 único; noindex; nenhuma mídia não aprovada; Zero 200 ml; Pitaya ausente");
  const links = await page.locator("a[href]").evaluateAll(elements => elements.map(e => e.getAttribute("href")));
  for (const href of links) {
    const url = new URL(href, "http://127.0.0.1:3000");
    if (url.hostname === "127.0.0.1") {
      assert.equal(url.pathname, "/");
      if (url.hash) assert.equal(await page.locator(url.hash).count(), 1, `Âncora ausente: ${href}`);
    } else { assert.equal(url.hostname, "wa.me"); assert.equal(url.pathname, "/5551992485496"); }
  }
  report.checks.push("Todos os links internos resolvem; links externos somente WhatsApp confirmado, sem envio");
  for (const width of [320, 375, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 960 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(120);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    if (overflow) {
      console.log(await page.locator("body *").evaluateAll(elements => elements.filter(e => e.getBoundingClientRect().right > innerWidth + 1).map(e => ({ tag: e.tagName, class: e.className, right: e.getBoundingClientRect().right }))));
      await page.screenshot({ path: `docs/preview/overflow-${width}.png`, fullPage: true });
    }
    assert.equal(overflow, false, `Overflow em ${width}px`);
    await page.screenshot({ path: `docs/preview/home-${width}.png`, fullPage: true });
    if (width === 390 || width === 1440) await page.screenshot({ path: `docs/preview/first-fold-${width}.png` });
    report.widths.push({ width, horizontalOverflow: overflow });
  }
  await page.setViewportSize({ width: 390, height: 844 });
  const menu = page.locator(".menu-toggle");
  await menu.focus();
  await page.keyboard.press("Enter");
  assert.equal(await menu.getAttribute("aria-expanded"), "true");
  await page.keyboard.press("Tab");
  assert.equal(await page.evaluate(() => document.activeElement.textContent), "Nossas linhas");
  await page.screenshot({ path: "docs/preview/menu-mobile.png" });
  await page.keyboard.press("Escape");
  assert.equal(await menu.getAttribute("aria-expanded"), "false");
  assert.equal(await menu.evaluate(e => e === document.activeElement), true);
  await menu.click();
  await page.getByRole("navigation", { name: "Navegação principal" }).getByRole("link", { name: "Nossas linhas" }).click();
  assert.equal(await menu.getAttribute("aria-expanded"), "false");
  assert.equal(new URL(page.url()).hash, "#linhas");
  report.checks.push("Menu mobile: Enter, Tab, Escape, retorno do foco e âncora funcionais");
  await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
  await page.keyboard.press("Tab");
  assert.equal(await page.evaluate(() => document.activeElement.textContent), "Pular para o conteúdo");
  const focus = await page.locator(".skip-link").evaluate(e => getComputedStyle(e).outlineStyle);
  assert.notEqual(focus, "none");
  assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), "auto");
  report.checks.push("Link de salto e foco visível; preferência de movimento reduzido respeitada");
  await page.setViewportSize({ width: 640, height: 900 });
  await page.evaluate(() => { document.documentElement.style.fontSize = "200%"; });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
  report.checks.push("Sem overflow no teste de fonte raiz ampliada; não substitui teste manual de zoom do navegador");
  assert.equal(report.errors.length, 0);
  assert.equal(report.externalRequests.length, 0);
  const notFound = await page.request.get("http://127.0.0.1:3000/pagina-inexistente");
  assert.equal(notFound.status(), 404);
  const robots = await page.request.get("http://127.0.0.1:3000/robots.txt");
  assert.match(await robots.text(), /Disallow: \//);
  report.checks.push("404 e robots.txt corretos; nenhum erro de console/JS ou pedido externo na Home");
  await writeFile("docs/preview/browser-checks.json", JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally { await browser.close(); }
