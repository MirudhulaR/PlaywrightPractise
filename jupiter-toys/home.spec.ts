import { test, expect } from '@playwright/test';

test('home page title', async ({ page }) => {
  // Navigate to a website
  await page.goto('https://jupiter.cloud.planittesting.com/#/');

  // Interact with the page
  const title = await page.title();
  console.log(`Title: ${title}`);

  // Add an assertion on the page title
  expect(title).toBe('Jupiter Toys');
});
