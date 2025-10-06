import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor( page: Page) {
    super(page);
  }

  async navigate() {
    await this.page.goto('https://jupiter.cloud.planittesting.com/#/');
  }

  async clickContactLink() {
    await this.page.click('a[href="#/contact"]');
  }

}
