import tokenConfig from '../framework/config/bookstoreTokenConfig.js'
import tokenService from '../framework/services/bookstoreTokenService.js'

describe('bookstore.demoqa API tests with Jest - a token generation', () => {
  test('should pass to generate a token with correct credentials', async () => {
    const response = await tokenService({
      userName: tokenConfig.userName,
      password: tokenConfig.password,
    })
    expect(response.status).toBe(200)
    expect(response.data.result).toBe('User authorized successfully.')
    expect(response.data.token).toBeDefined()
  })
  test('should fail to generate a token with incorrect credentials', async () => {
    const response = await tokenService({
      userName: tokenConfig.userNameEmpty,
      password: tokenConfig.password,
    })
    expect(response.status).toBe(400)
    expect(response.data.code).toBe('1200')
    expect(response.data.message).toBe('UserName and Password required.')
  })
})