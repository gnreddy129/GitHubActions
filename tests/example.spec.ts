import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.only('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Narasimha');
  await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();
  await page.locator('textarea').click();
  await page.locator('textarea').fill('Hyderabad');
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('gujjula-narasimha.reddy@capgemini.com');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.locator('#msdd').click();
  await page.getByText('English').click();
  await page.getByRole('button', { name: 'Submit' }).click();
});
