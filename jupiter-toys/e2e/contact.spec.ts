import { test, expect } from '@playwright/test';

test('Contact form submission', async ({ page }) => {
  // Navigate to the contact page
  await page.goto('https://jupiter.cloud.planittesting.com/#/contact');

  // Fill in the contact form
  await page.fill('input[name="forename"]', 'John');
  await page.fill('input[name="surname"]', 'Doe');
  await page.fill('input[name="email"]', 'john.doe@example.com');
  await page.fill('input[name="telephone"]', '1234567890');
  await page.fill('textarea[name="message"]', 'This is a test message.');

  // Submit the form
  // npx playwright codegen
  await page.getByRole('link', { name: 'Submit' }).click();

  // Wait for the success message
  const successMessage = await page.waitForSelector('.alert-success');
  expect(successMessage).toBeTruthy();

  // Verify the success message content
  const successMessageText = await successMessage.textContent();
  expect(successMessageText).toContain('Thanks John, we appreciate your feedback.');
});
