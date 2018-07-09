const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
        executablePath: '/usr/bin/chromium-browser',
        headless: true
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
