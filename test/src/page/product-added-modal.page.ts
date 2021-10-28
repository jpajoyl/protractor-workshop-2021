import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private procedToCheckout: ElementFinder;

  constructor() {
    this.procedToCheckout = $('.layer_cart_cart .button-container > a');
  }

  public async goToCheckOut(): Promise<void> {
    await this.procedToCheckout.click();
  }

  public getProcedToCheckout(): ElementFinder {
    return this.procedToCheckout;
  }
}
