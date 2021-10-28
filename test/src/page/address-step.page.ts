import { $, ElementFinder } from 'protractor';

export class AdressStepPage {
  private procedToCheckout: ElementFinder;

  constructor() {
    this.procedToCheckout = $('form .button');
  }

  public async goToCheckout(): Promise<void> {
    await this.procedToCheckout.click();
  }
}
