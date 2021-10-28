import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private checkBox: ElementFinder;

  private checkout: ElementFinder;

  constructor() {
    this.checkBox = $('#cgv');
    this.checkout = $('button[name*=processCarrier]');
  }

  public async selectCheckbox(): Promise<void> {
    await this.checkBox.click();
  }

  public async goToCheckout(): Promise<void> {
    await this.checkout.click();
  }
}
