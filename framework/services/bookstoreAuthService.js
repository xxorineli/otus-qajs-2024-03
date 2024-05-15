import bookstoreAuthConfig from '../config/bookstoreAuthConfig'

// Определяет функцию авторизации пользователя
const bookstoreAuthorize = async ({ userName, password }) => {
  const response = await fetch(`${bookstoreAuthConfig.baseURL}/Account/v1/Authorized`, {
    method: 'POST',
    body: JSON.stringify({
      userName,
      password,
    }),
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${bookstoreAuthConfig.token}` },
  })
  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  }
}

export default bookstoreAuthorize