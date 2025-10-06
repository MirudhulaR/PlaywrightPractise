import { Page } from '@playwright/test';
export class ContactPage {
  constructor(private page: Page) {}
  async navigate() {
    await this.page.goto('https://jupiter.cloud.planittesting.com/#/contact');
  }
  async fillContactForm(forename: string, surname: string, email: string, telephone: string, message: string) {
    await this.page.fill('input[name="forename"]', forename);
    await this.page.fill('input[name="surname"]', surname);
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="telephone"]', telephone);
    await this.page.fill('textarea[name="message"]', message);
  }
  async submitForm() {
    await this.page.getByRole('link', { name: 'Submit' }).click();
  }
  async getSuccessMessage() {
    const successMessage = await this.page.waitForSelector('.alert-success');
    return successMessage.textContent();
  }
}
