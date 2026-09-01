import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CompraPage } from '../../pages/CompraPage';

test('Ejercicio 1 - Agregar y eliminar producto del carrito', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const compraPage = new CompraPage(page);

  await loginPage.ir();
  await loginPage.login('standard_user', 'secret_sauce');

  await compraPage.agregarOnesie();

  await expect(compraPage.carritoBadge).toContainText('1');

  await compraPage.irAlCarrito();

  await compraPage.eliminarOnesie();

  await expect(compraPage.carritoLink).toBeVisible();

});