// npx playwright codegen https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login

import { test, expect } from '@playwright/test'

test('customer login by Hermoine Granger', async ({ page }) => {
  await page.goto(
    'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
  )
  await page.getByRole('button', { name: 'Customer Login' }).click()
  await page.locator('#userSelect').selectOption('1')
  await page.getByRole('button', { name: 'Login' }).click()
  await expect(page.locator('body')).toContainText('Hermoine Granger')
  await page.getByRole('button', { name: 'Logout' }).click()
  await page.getByRole('button', { name: 'Home' }).click()
})

test("show Harry Potter's transactions", async ({ page }) => {
  await page.goto(
    'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
  )
  await page.getByRole('button', { name: 'Customer Login' }).click()
  await page.locator('#userSelect').selectOption('2')
  await page.getByRole('button', { name: 'Login' }).click()
  await page.getByRole('button', { name: 'Transactions' }).click()
  await page.getByRole('button', { name: 'Logout' }).click()
  await page.getByRole('button', { name: 'Home' }).click()
})

test("add Ron Weasly's deposit", async ({ page }) => {
  await page.goto(
    'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
  )
  await page.getByRole('button', { name: 'Customer Login' }).click()
  await page.locator('#userSelect').selectOption('3')
  await page.getByRole('button', { name: 'Login' }).click()
  await page.getByRole('button', { name: 'Deposit' }).click()
  await page.getByPlaceholder('amount').click()
  await page.getByPlaceholder('amount').fill('300')
  await page.getByRole('form').getByRole('button', { name: 'Deposit' }).click()
  await expect(page.locator('body')).toContainText('Deposit Successful')
  await page.getByRole('button', { name: 'Logout' }).click()
  await page.getByRole('button', { name: 'Home' }).click()
})

test("open Neville Longbottom's account in pounds", async ({ page }) => {
  await page.goto(
    'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
  )
  await page.getByRole('button', { name: 'Bank Manager Login' }).click()
  await page.getByRole('button', { name: 'Open Account' }).click()
  await page.locator('#userSelect').selectOption('5')
  await page.locator('#currency').selectOption('Pound')
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`)
    dialog.dismiss().catch(() => {})
  })
  await page.getByRole('button', { name: 'Home' }).click()
})

test("delete Albus Dumbledore's account", async ({ page }) => {
  await page.goto(
    'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
  )
  await page.getByRole('button', { name: 'Bank Manager Login' }).click()
  await page.getByRole('button', { name: 'Customers' }).click()
  await page
    .getByRole('row', { name: 'Albus Dumbledore E55656 1010' })
    .getByRole('button')
    .click()
  await page.getByRole('button', { name: 'Home' }).click()
})
