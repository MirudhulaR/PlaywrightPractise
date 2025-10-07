import { defineConfig, devices} from '@playwright/test';
import { browserName, deviceType, workers, fullyParallel } from './e2e/config/validateEnv';

const projects = [
  {
    name: 'chromium',
    use: deviceType === 'desktop' ? { ...devices['Desktop Chrome'] } : { ...devices['Pixel 5'] },
  },
  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
  },
  {
    name: 'webkit',
    use: deviceType === 'desktop' ? { ...devices['Desktop Safari'] } : { ...devices['iPhone 12'] },
}];

export default defineConfig({
  use: {
    browserName,
    headless: process.env.HEADLESS === 'true', // Use the HEADLESS environment variable
    screenshot: 'only-on-failure', // Take screenshots only on test failure
  },
  projects: projects.filter(project => project.name === browserName),
  reporter: [
    ['list'], // Default reporter
    ['html', { outputFolder: 'playwright-report' }] // HTML reporter
  ],
  workers: workers, // Set the number of workers based on the WORKERS environment variable
  fullyParallel: fullyParallel, // Set fullyParallel based on the FULLY_PARALLEL environment variable
});
