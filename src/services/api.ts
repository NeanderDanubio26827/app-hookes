import axios from 'axios'
import { getUserLocalStorage } from '../context/AuthProvider/util'
import { env } from '../env'

const api = axios.create({
  baseURL: env.VITE_APP_API_URL,
})

api.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage()

    config.headers.Authorization = `Bearer ${user?.token}`

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export { api }
