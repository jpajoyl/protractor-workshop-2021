import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirm: ElementFinder;

  constructor() {
    this.confirm = $('#cart_navigation > button');
  }

  public async confirmOrder(): Promise<void> {
    await this.confirm.click();
  }
}
