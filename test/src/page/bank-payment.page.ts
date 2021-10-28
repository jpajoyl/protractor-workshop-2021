import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private text: ElementFinder;

  constructor() {
    this.text = $('#center_column > div > p > strong');
  }

  public async changeText(text: string): Promise<void> {
    await expect(this.text.getText())
      .toBe(text);
  }
}
