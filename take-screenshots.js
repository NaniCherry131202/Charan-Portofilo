import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sites = [
  { name: 'cosmo_public', url: 'https://www.cosmoradiance.com' },
  { name: 'cosmo_admin', url: 'https://admin.cosmoradiance.com' }
];

(async () => {
  const browser = await puppeteer.launch();
  
  for (const site of sites) {
    console.log(`Taking screenshot of ${site.name}...`);
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 60000 });
      await page.screenshot({ path: path.join(__dirname, 'src', 'assets', `${site.name}.png`) });
      await page.close();
      console.log(`Successfully saved ${site.name}.png`);
    } catch (err) {
      console.error(`Failed to capture ${site.name}:`, err.message);
    }
  }

  await browser.close();
})();
