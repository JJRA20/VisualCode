# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI\POM_01.spec.ts >> Ejercicio 1 - Agregar y eliminar producto del carrito
- Location: tests\UI\POM_01.spec.ts:5:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

```

# Test source

```ts
  1  | // ============================================================
  2  | // LoginPage: encapsula la pantalla inicial de saucedemo.com
  3  | // ============================================================
  4  | import { Page, Locator, expect } from '@playwright/test';
  5  | 
  6  | export class LoginPage {
  7  |   readonly page: Page;
  8  |   readonly inputUsuario: Locator;
  9  |   readonly inputPassword: Locator;
  10 |   readonly botonLogin: Locator;
  11 |   readonly mensajeError: Locator;
  12 | 
  13 |   constructor(page: Page) {
  14 |     this.page = page;
  15 |     // SauceDemo expone atributos data-test pensados para automatización
  16 |     this.inputUsuario = page.getByTestId('username');
  17 |     this.inputPassword = page.getByTestId('password');
  18 |     this.botonLogin = page.getByTestId('login-button');
  19 |     this.mensajeError = page.getByTestId('error');
  20 |   }
  21 | 
  22 |   async ir(): Promise<void> {
> 23 |     await this.page.goto('/');
     |                     ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  24 |   }
  25 | 
  26 |   async login(usuario: string, password: string): Promise<void> {
  27 |     await this.inputUsuario.fill(usuario);
  28 |     await this.inputPassword.fill(password);
  29 |     await this.botonLogin.click();
  30 |   }
  31 | 
  32 |   async esperarErrorVisible(textoEsperado: string | RegExp): Promise<void> {
  33 |     await expect(this.mensajeError).toBeVisible();
  34 |     await expect(this.mensajeError).toContainText(textoEsperado);
  35 |   }
  36 | }
  37 | 
  38 | // Usuarios de prueba predefinidos por SauceDemo (misma password para todos)
  39 | export const USUARIOS = {
  40 |   estandar: 'standard_user',
  41 |   bloqueado: 'locked_out_user',
  42 |   conProblemas: 'problem_user',
  43 |   lento: 'performance_glitch_user',
  44 |   conErrores: 'error_user',
  45 |   visual: 'visual_user',
  46 | } as const;
  47 | 
  48 | export const PASSWORD = 'secret_sauce';
  49 | 
```