import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { CompraPage } from '../../pages/CompraPage';

test('Compra completa con POM', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const compraPage = new CompraPage(page);

  // Login
  await loginPage.ir();
  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await expect(page).toHaveURL(/inventory.html/);

  // Compra
  await compraPage.agregarProductos();
  await compraPage.irAlCarrito();

  // Checkout
  await compraPage.iniciarCheckout();

  await compraPage.completarDatos(
    'Juan',
    'Rios',
    '000123'
  );

  await compraPage.continuar();
  await compraPage.finalizarCompra();

  // Validación final
  await expect(compraPage.completeHeader)
    .toHaveText('Thank you for your order!');
});