import bookstoreDeleteUserConfig from '../config/bookstoreDeleteUserConfig'

// Определяет функцию удаления пользователя
const bookstoreDeleteUser = async ({ userId }) => {
  const response = await fetch(`${bookstoreDeleteUserConfig.baseURL}/Account/v1/User/${bookstoreDeleteUserConfig.userId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${bookstoreDeleteUserConfig.token}` },
  })
  return {
    headers: response.headers,
    status: response.status,
    data: await response.json(),
  }
}

export default bookstoreDeleteUser