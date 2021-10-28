import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private paymenMethod: ElementFinder;

  constructor() {
    this.paymenMethod = $('#HOOK_PAYMENT a.bankwire');
  }

  public async continue(): Promise<void> {
    await this.paymenMethod.click();
  }
}
