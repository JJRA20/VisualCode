import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test('Ejercicio 3 - Ordenar productos de mayor a menor', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.ir();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await inventoryPage.ordenarPor('hilo');

  await expect(
    inventoryPage.productos.first()
  ).toBeVisible();

});