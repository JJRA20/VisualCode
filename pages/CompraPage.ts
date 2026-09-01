import { Page, Locator } from '@playwright/test';

export class CompraPage {
  readonly page: Page;

  readonly mochilaButton: Locator;
  readonly bikeLightButton: Locator;
  readonly onesieButton: Locator;

  readonly carritoLink: Locator;
  readonly carritoBadge: Locator;
  readonly removeOnesieButton: Locator;

  readonly checkoutButton: Locator;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;

  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly completeHeader: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.mochilaButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );

    this.bikeLightButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-bike-light"]'
    );

    this.onesieButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-onesie"]'
    );

    this.carritoLink = page.locator(
      '[data-test="shopping-cart-link"]'
    );

    this.carritoBadge = page.locator(
      '[data-test="shopping-cart-badge"]'
    );

    this.removeOnesieButton = page.locator(
      '[data-test="remove-sauce-labs-onesie"]'
    );

    this.checkoutButton = page.locator(
      '[data-test="checkout"]'
    );

    this.firstNameInput = page.locator(
      '[data-test="firstName"]'
    );

    this.lastNameInput = page.locator(
      '[data-test="lastName"]'
    );

    this.postalCodeInput = page.locator(
      '[data-test="postalCode"]'
    );

    this.continueButton = page.locator(
      '[data-test="continue"]'
    );

    this.finishButton = page.locator(
      '[data-test="finish"]'
    );

    this.completeHeader = page.locator(
      '[data-test="complete-header"]'
    );

    this.cancelButton = page.locator(
      '[data-test="cancel"]'
    );
  }

  async agregarProductos() {
    await this.mochilaButton.click();
    await this.bikeLightButton.click();
  }

  async agregarOnesie() {
    await this.onesieButton.click();
  }

  async irAlCarrito() {
    await this.carritoLink.click();
  }

  async eliminarOnesie() {
    await this.removeOnesieButton.click();
  }

  async iniciarCheckout() {
    await this.checkoutButton.click();
  }

  async completarDatos(
    nombre: string,
    apellido: string,
    codigoPostal: string
  ) {
    await this.firstNameInput.fill(nombre);
    await this.lastNameInput.fill(apellido);
    await this.postalCodeInput.fill(codigoPostal);
  }

  async continuar() {
    await this.continueButton.click();
  }

  async finalizarCompra() {
    await this.finishButton.click();
  }

  async agregarMochila() {
  await this.mochilaButton.click();
  }

async cancelarCompra() {
  await this.cancelButton.click();
  }
}