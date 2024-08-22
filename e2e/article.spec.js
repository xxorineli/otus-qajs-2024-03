// @ts-check
import { test } from '@playwright/test'
import { loginAdmin } from '../framework/actions/auth.js'

test.beforeEach(async ({ page }) => {
  await loginAdmin({ page })
})
