// @flow strict-local

import type {Browser, Page} from 'puppeteer';

const URL = 'http://localhost:3000';

describe('Main', () => {
  let page: Page;

  beforeAll(async () => {
    let browser: Browser = global.__BROWSER__;
    let newPage = browser.newPage();
    page = await newPage;
  }, 10000);

  beforeEach(async () => {
    await page.goto(URL);
  }, 10000);

  it(
    'should open MAL page',
    async () => {
      await page.waitForSelector('[data-testid="appContainer"]');
      await page.waitForSelector('[data-testid="imageFrame0"]');
      await page.click('[data-testid="imageFrame0"]');
      await page.waitFor(3000);
    },
    20000,
  );
});
