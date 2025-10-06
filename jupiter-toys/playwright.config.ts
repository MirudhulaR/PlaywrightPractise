import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // Run tests in headful mode
    screenshot: 'only-on-failure', // Take screenshots only on test failure
  },
   reporter: [
    ['list'], // Default reporter
    ['html', { outputFolder: 'playwright-report' }] // HTML reporter
  ],

});
