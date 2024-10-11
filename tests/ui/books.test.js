const { test, expect } = require('@playwright/test');

test('Check books page', async ({ page }) => {
    await page.goto('https://viktorkrustev-exam.onrender.com/bookd');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  