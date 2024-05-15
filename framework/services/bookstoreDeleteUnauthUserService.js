import bookstoreDeleteUserConfig from '../config/bookstoreDeleteUserConfig'

// Определяет функцию удаления пользователя
const bookstoreDeleteUnauthUser = async ({ userId }) => {
  const response = await fetch(`${bookstoreDeleteUserConfig.baseURL}/Account/v1/User/${userId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  }
}

export default bookstoreDeleteUnauthUser