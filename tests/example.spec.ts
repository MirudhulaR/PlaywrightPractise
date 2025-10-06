import { test, expect } from '@playwright/test';

// Describe your test
test('should have the correct page title', async ({ page }) => {
  // Step 1: Go to the webpage
  await page.goto('https://example.com');

  // Step 2: Get the title and check if it matches "Example Domain"
  await expect(page).toHaveTitle('Example Domain');
});
