import axios from 'axios'
import config from '../config/bookstoreConfig'

// Инстанс axios с базовым URL и генерацией ошибки если ответ не 200
const client = axios.create({
  baseURL: config.baseURL,
  validateStatus: () => true,
})

// Создание пользователя
const createUser = async ({ userName, password }) => {
  const response = await client.post(`/Account/v1/User`, {
    userName,
    password,
  })

  return {
    status: response.status,
    headers: response.headers,
    data: response.data,
  }
}

// Получение информации о пользователе
const getUser = async ({ userID, token }) => {
  const response = await client.get(`/Account/v1/User/${userID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return {
    status: response.status,
    headers: response.headers,
    data: response.data,
  }
}

// Удаление пользователя
const deleteUser = async ({ userID, token }) => {
  const response = await client.delete(`/Account/v1/User/${userID}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return {
    status: response.status,
    headers: response.headers,
    data: response.data,
  }
}

export default {
  create: createUser,
  get: getUser,
  delete: deleteUser,
}
