import { browser, ExpectedConditions } from 'protractor';
import {
  AdressStepPage,
  BankPaymentPage,
  MenuContentPage,
  OrderSummaryPage,
  PaymentStepPage,
  ProductAddedModalPage,
  ProductListPage,
  ShippingStepPage,
  SignInStepPage,
  SummaryStepPage,
} from './src/page';

const EC = ExpectedConditions;

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const adressStepPage: AdressStepPage = new AdressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await browser.wait(EC.elementToBeClickable(productListPage.getAddToCart()), 10000);
    await productListPage.addTShirtCart();

    await browser.wait(EC.elementToBeClickable(productAddedModalPage.getProcedToCheckout()), 10000);
    await productAddedModalPage.goToCheckOut();
    await summaryStepPage.procedToCheckout();

    await signInStepPage.sendCredentials('aperdomobo@gmail.com', 'WorkshopProtractor');
    await signInStepPage.signIn();

    await adressStepPage.goToCheckout();

    await shippingStepPage.selectCheckbox();

    await shippingStepPage.goToCheckout();
    await paymentStepPage.continue();
    await orderSummaryPage.confirmOrder();

    await bankPaymentPage.changeText('Your order on My Store is complete.');
  });
});
