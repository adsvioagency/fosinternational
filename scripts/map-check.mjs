// Screenshot of the embedded map on the contact page (manual visual check).
// Usage: node scripts/map-check.mjs [baseUrl] [outFile]
import { chromium } from 'playwright-core';
import { existsSync } from 'node:fs';

const base = process.argv[2] || 'http://localhost:4321';
const out = process.argv[3] || 'map-check.png';
const executablePath = ['C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(existsSync);
const browser = await chromium.launch({ executablePath, headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(base + '/fr/contact/');
const map = page.locator('.office__map');
await map.scrollIntoViewIfNeeded();
await page.waitForTimeout(8000);
await map.screenshot({ path: out });
console.log('saved', out);
await browser.close();
