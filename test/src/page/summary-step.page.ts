import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private checkout: ElementFinder;

  constructor() {
    this.checkout = $('.cart_navigation span');
  }

  public async procedToCheckout(): Promise<void> {
    await this.checkout.click();
  }
}
