import puppeteer from 'puppeteer';
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1920, height: 1080 });
await page.goto('http://localhost:4321');
await page.waitForTimeout(2000);
await page.screenshot({ path: 'local_screenshot.png', fullPage: true });
await browser.close();
