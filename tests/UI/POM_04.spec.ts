import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CompraPage } from '../../pages/CompraPage';

test('Ejercicio 4 - Cancelar compra desde el resumen', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const compraPage = new CompraPage(page);

  await loginPage.ir();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await compraPage.agregarMochila();

  await compraPage.irAlCarrito();

  await compraPage.iniciarCheckout();

  await compraPage.completarDatos(
    'Rodrigo',
    'Escobar',
    '123456789'
  );

  await compraPage.continuar();

  await compraPage.cancelarCompra();

  await expect(page).toHaveURL(/.*inventory\.html/);

});