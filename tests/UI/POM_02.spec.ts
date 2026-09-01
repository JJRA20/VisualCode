import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Ejercicio 2 - Usuario bloqueado', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.ir();

  await loginPage.login(
    'locked_out_user',
    'secret_sauce'
  );

  await expect(loginPage.mensajeError).toContainText(
    'Epic sadface: Sorry, this user has been locked out.'
  );

});