const { test, expect } = require('@playwright/test');

test('Check add book page', async ({ page }) => {
    await page.goto('https://viktorkrustev-exam.onrender.com/add-book');
    const form = await page.$('label');
    expect(form).toBeTruthy();
  });
  