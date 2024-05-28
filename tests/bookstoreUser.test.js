import config from '../framework/config/bookstoreConfig.js'
import authService from '../framework/services/bookstoreAuthService.js'
import userService from '../framework/services/bookstoreUserService.js'

describe('проверка информации о пользователе', () => {
  let token
  test('успех при наличии верных данных', async () => {
    const responseToken = await authService.generateToken({
      userName: config.userName,
      password: config.password,
    })
    token = responseToken.data.token

    const response = await userService.get({
      userId: config.userId,
      token,
    })
    expect(response.status).toBe(200)
    expect(response.data.username).toBe('otus-qajs-zorin')
  })
  test('ошибка при отсутствии токена авторизации', async () => {
    const responseToken = await authService.generateToken({
      userName: config.userName,
      password: config.password,
    })
    token = responseToken.data.token

    const response = await userService.get({
      userId: config.userId,
    })
    expect(response.status).toBe(401)
    expect(response.data.code).toBe('1200')
    expect(response.data.message).toBe('User not authorized!')
  })
})

describe('проверка удаления пользователя', () => {
  let token
  test('успех при наличии верных данных', async () => {
    const responseToken = await authService.generateToken({
      userName: config.userName,
      password: config.password,
    })
    token = responseToken.data.token

    const response = await userService.delete({
      userId: config.userId,
      token,
    })
    expect(response.status).toBe(204)
    expect(response.data).toBe('')
  })
  test('ошибка при отсутствии токена авторизации', async () => {
    const responseToken = await authService.generateToken({
      userName: config.userName,
      password: config.password,
    })
    token = responseToken.data.token

    const response = await userService.delete({
      userId: config.userId,
    })
    expect(response.status).toBe(401)
    expect(response.data.code).toBe('1200')
    expect(response.data.message).toBe('User not authorized!')
  })
})
