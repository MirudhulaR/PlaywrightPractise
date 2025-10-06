import { test, expect } from '@playwright/test';
import { HomePage } from './e2e/pages/HomePage'; 


test('home page title', async ({ page }) => {
  // Navigate to a website
  const homePage = new HomePage(page);

  // Navigate to the Home page
   await homePage.navigate();

  // Interact with the page
  const title = await homePage.getTitle();
  console.log(`Title: ${title}`);

  // Add an assertion on the page title
  expect(title).toBe('Jupiter Toys');
  
});

test('Navigate to contact page from home', async ({ page }) => {
    const homePage = new HomePage(page);
  
    // Navigate to the home page
    await homePage.navigate();
  
    // Click on the contact link
    await homePage.clickContactLink();
  
    // Verify the navigation to the contact page
    expect(page.url()).toContain('#/contact');
});

