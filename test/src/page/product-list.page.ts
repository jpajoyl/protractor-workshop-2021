import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addToCart: ElementFinder;

  constructor() {
    this.addToCart = $('#center_column a.ajax_add_to_cart_button');
  }

  public async addTShirtCart(): Promise<void> {
    await this.addToCart.click();
  }

  public getAddToCart(): ElementFinder {
    return this.addToCart;
  }
}
