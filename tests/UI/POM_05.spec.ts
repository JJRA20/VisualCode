import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CompraPage } from '../../pages/CompraPage';

test('Ejercicio 5 - Captura de bug con problem_user', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const compraPage = new CompraPage(page);

  await loginPage.ir();

  await loginPage.login(
    'problem_user',
    'secret_sauce'
  );

  await compraPage.agregarMochila();

  await page.screenshot({
    path: 'problem_user.png',
    fullPage: true
  });

});