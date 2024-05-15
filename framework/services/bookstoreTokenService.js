import bookstoreTokenConfig from '../config/bookstoreTokenConfig'

// Определяет функцию генерации токена авторизации
const bookstoreTokenGenerate = async ({ userName, password }) => {
  const response = await fetch(`${bookstoreTokenConfig.baseURL}/Account/v1/GenerateToken`, {
    method: 'POST',
    body: JSON.stringify({
      userName,
      password,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  }
}

export default bookstoreTokenGenerate