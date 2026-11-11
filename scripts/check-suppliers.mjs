import { pathToFileURL } from 'node:url';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { supplierGroups, confirmedSupplierUrl } from '../src/content/suppliers.ts';
const { chromium } = await import(pathToFileURL(process.env.PLAYWRIGHT_MODULE).href);
const base = process.env.PREVIEW_URL || 'http://127.0.0.1:3005';
const sample = supplierGroups[0].suppliers[0];
assert.equal(confirmedSupplierUrl({...sample, whatsapp:{url:'https://wa.me/5551992485496',confirmed:true}}, 'whatsapp'), null);
assert.equal(confirmedSupplierUrl({...sample,confirmationStatus:'confirmed',publicationStatus:'approved',catalog:{url:'javascript:alert(1)',confirmed:true}}, 'catalog'),null);
const browser = await chromium.launch({executablePath:process.env.CHROME_PATH,headless:true});
const results={widths:[],links:[],errors:[]};
try {
 const page=await browser.newPage();page.on('pageerror',e=>results.errors.push(e.message));
 assert.equal((await page.goto(base+'/fornecedores')).status(),200);
 assert.equal(await page.locator('h1').count(),1);
 const cards=page.locator('[data-supplier-id]');assert.equal(await cards.count(),1);
 assert.equal(await cards.locator('a,button').count(),0);
 assert.equal(await page.getByText('EXEMPLO — DADOS PENDENTES DE CONFIRMAÇÃO',{exact:true}).count(),1);
 assert.equal(await page.locator('main input, main select').count(),0);
 assert.equal(await page.getByRole('link',{name:'Falar com a Nutri Açaí',exact:true}).getAttribute('href'),'https://wa.me/5551992485496');
 await mkdir('docs/suppliers-preview',{recursive:true});
 for(const width of [320,375,768,1440]){
  await page.setViewportSize({width,height:1000});
  const scrollWidth=await page.evaluate(()=>document.documentElement.scrollWidth);assert.equal(scrollWidth,width);
  await page.screenshot({path:`docs/suppliers-preview/page-${width}.png`,fullPage:true});
  let menuScrollWidth = null;
  if (width < 900) {
   const toggle = page.locator('button[aria-controls="main-navigation"]');
   await toggle.click();
   assert.equal(await toggle.getAttribute('aria-expanded'),'true');
   menuScrollWidth = await page.evaluate(()=>document.documentElement.scrollWidth);
   assert.equal(menuScrollWidth,width);
   await page.keyboard.press('Escape');
   assert.equal(await toggle.getAttribute('aria-expanded'),'false');
  }
  results.widths.push({width,scrollWidth,menuScrollWidth});
 }
 for(const href of [...new Set(await page.locator('a[href]').evaluateAll(es=>es.map(e=>e.getAttribute('href'))))]){
  if(href.startsWith('https://')) {assert.equal(href,'https://wa.me/5551992485496');results.links.push({href,checked:'URL oficial, sem envio externo'});continue;}
  const url=new URL(href,base+'/fornecedores');const response=await page.request.get(url.origin+url.pathname);assert.equal(response.status(),200);
  if(url.hash){await page.goto(url.href);assert.equal(await page.locator(url.hash).count(),1);}
  results.links.push({href,status:response.status()});
 }
 assert.deepEqual(results.errors,[]);await writeFile('docs/suppliers-preview/results.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2));
} finally {await browser.close();}
