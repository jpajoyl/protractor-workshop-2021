import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private email: ElementFinder;

  private pass: ElementFinder;

  private submitData: ElementFinder;

  constructor() {
    this.email = $('#email');
    this.pass = $('#passwd');
    this.submitData = $('#SubmitLogin > span');
  }

  public async sendCredentials(email: string, pass: string): Promise<void> {
    await this.email.sendKeys(email);
    await this.pass.sendKeys(pass);
  }

  public async signIn(): Promise<void> {
    await this.submitData.click();
  }
}
