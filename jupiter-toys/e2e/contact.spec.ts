import { test, expect } from '@playwright/test';
import { ContactPage } from './pages/ContactPage';

test('Contact form submission', async ({ page }) => {
     const contactPage = new ContactPage(page);


  // Navigate to the contact page
  await page.goto('https://jupiter.cloud.planittesting.com/#/contact');

  // Fill in the contact form
  await contactPage.fillContactForm(' ', ' ', ' ', ' ', ' ');


  // Check for validation errors
  expect(await contactPage.checkTextIsVisible('Forename is required')).toBe(true);
  expect(await contactPage.checkTextIsVisible('Email is required')).toBe(true);
  expect(await contactPage.checkTextIsVisible('Message is required')).toBe(true);


  // Fill in the contact form
  await contactPage.fillContactForm('John', 'Doe', 'john.doe@example.com', '1234567890', 'This is a test message.');

  // Submit the form
  await contactPage.submitForm();

  // Verify the success message content
 const successMessageText = await contactPage.getSuccessMessage();
  expect(successMessageText).toContain('Thanks John, we appreciate your feedback.');
});
