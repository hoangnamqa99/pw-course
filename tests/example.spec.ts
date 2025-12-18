import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
// Truy cập vào link Playwright sửa link 
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Click vào link "Bài học 1: Register Page"
  await page.getByText('Bài học 1: Register Page').click();

  // Kiểm tra xem có thẻ heading chứa chữ "User Registration" không
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});