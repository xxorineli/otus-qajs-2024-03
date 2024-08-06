// @ts-check
import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { AuthPage } from '../framework/pages/AuthPage.js'
import { LoginPage } from '../framework/pages/LoginPage.js'

test('Успешное создание нового пользователя', async ({ page }) => {
  // test.slow()
  // test.setTimeout(120000)
  const authPage = AuthPage({ page })

  await authPage.reg({
    username: faker.person.fullName(),
    email: faker.internet.email(),
    password: 'E5dPkCf7bPTnfn6q',
  })

  await page
    .locator(
      'html > body > div > nav > div > ul > li:nth-of-type(4) > a > span',
    )
    .click()
  await expect(page.getByText('No articles are here... yet.')).toBeVisible()
  // await expect(page.getByText('No articles are here... yet.')).toBeVisible({ timeout: 120000 })
})

test('Успешная авторизация пользователя', async ({ page }) => {
  const loginPage = LoginPage({ page })

  await loginPage.login({
    email: 'root@mail.net',
    password: 'E5dPkCf7bPTnfn6q',
  })

  await page
    .locator(
      'html > body > div > nav > div > ul > li:nth-of-type(4) > a > span',
    )
    .click()
  await page
    .locator(
      'html > body > div > div > div:nth-of-type(1) > div > div > div > a',
    )
    .click()
  await expect(page.getByText('Otus')).toBeVisible()
})

test('Неуспешная авторизация с несуществующим email', async ({ page }) => {
  const loginPage = LoginPage({ page })

  await loginPage.login({
    email: faker.internet.email(),
    password: 'E5dPkCf7bPTnfn6q',
  })

  await expect(
    page.locator('html > body > div > div > div > div > div > ul > li'),
  ).toHaveText('email or password is invalid')
})

test('Неуспешная авторизация с пустыми полями', async ({ page }) => {
  const loginPage = LoginPage({ page })

  await loginPage.visit()
  await loginPage.submitForm()

  await expect(
    page.locator('html > body > div > div > div > div > div > ul > li'),
  ).toHaveText("email can't be blank")
})

test('Неуспешная регистрация с уже существующим пользователем', async ({
  page,
}) => {
  const authPage = AuthPage({ page })

  await authPage.reg({
    username: 'Otus',
    email: faker.internet.email(),
    password: 'E5dPkCf7bPTnfn6q',
  })

  await expect(
    page.locator('html > body > div > div > div > div > div > ul > li'),
  ).toHaveText('username has already been taken')
})
