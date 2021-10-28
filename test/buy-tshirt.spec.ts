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
  describe('Open page', () => {
    it('Open page in browser', async () => {
      await browser.get('http://automationpractice.com/');
    });
  });

  describe('Buy TShirt process', () => {
    it('go to menu', async () => {
      await menuContentPage.goToTShirtMenu();
    });
    browser.wait(EC.elementToBeClickable(productListPage.getAddToCart()), 10000);
    it('add t-shirt to cart', async () => {
      await productListPage.addTShirtCart();
    });
    browser.wait(EC.elementToBeClickable(productAddedModalPage.getProcedToCheckout()), 10000);
    it('go to checkout', async () => {
      await productAddedModalPage.goToCheckOut();
    });
    it('proced to checkout', async () => {
      await summaryStepPage.procedToCheckout();
    });
  });
  describe('App login', () => {
    it('set credentials', async () => {
      await signInStepPage.sendCredentials('aperdomobo@gmail.com', 'WorkshopProtractor');
    });
    it('login', async () => {
      await signInStepPage.signIn();
    });
  });
  describe('select adress', () => {
    it('continue to payment', async () => {
      await adressStepPage.goToCheckout();
    });
  });
  describe('Bank payment', () => {
    it('select checkbox', async () => {
      await shippingStepPage.selectCheckbox();
    });
    it('go to final checkout', async () => {
      await shippingStepPage.goToCheckout();
    });
    it('Continue to payment', async () => {
      await paymentStepPage.continue();
    });
    it('Confirm order', async () => {
      await orderSummaryPage.confirmOrder();
    });
    it('verify text', async () => {
      await bankPaymentPage.changeText('Your order on My Store is complete.');
    });
  });
});
