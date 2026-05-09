import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 900 });
  await page.goto('http://localhost:4321', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: '/Users/alquimiasoft/inovasore/public/bento.png', fullPage: true });
  await browser.close();
})();
