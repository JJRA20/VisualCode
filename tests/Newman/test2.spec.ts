import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

import { LoginPage, PASSWORD, USUARIOS } from '../../pages/LoginPage';
import { correrNewman } from '../../pages/NewmanRunner';

test('correr Newman y hacer login', async ({ page }) => {
  const resumen = await allure.step(
    'Correr la colección de Postman',
    () => correrNewman('01 - Fundamentos')
  );

  expect(resumen.run.stats.assertions.failed).toBe(0);

  await allure.step('Hacer login en SauceDemo', async () => {
    const loginPage = new LoginPage(page);

    await loginPage.ir();
    await loginPage.login(USUARIOS.estandar, PASSWORD);
  });
});