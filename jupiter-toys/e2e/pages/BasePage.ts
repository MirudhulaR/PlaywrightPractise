import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async getTitle() {
    return this.page.title();
  }
   async checkTextIsVisible(message: string) {
    return this.page.getByText(message).isVisible();
  }
  

}
