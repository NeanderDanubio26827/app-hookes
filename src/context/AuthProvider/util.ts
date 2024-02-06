import { api } from '../../services/api'
import { IUser } from './types'

export function setUserLocalStorage(user: IUser | null) {
  console.log('setUserLocalStorage', user)
  localStorage.setItem('u', JSON.stringify(user))
}

export function getUserLocalStorage(): IUser | null {
  const json = localStorage.getItem('u')
  if (!json) {
    return null
  }
  const user = JSON.parse(json)
  return user ?? null
}

export async function LoginRequest(username: string, password: string) {
  try {
    const request = await api.post('/auth', {
      username,
      password,
    })

    /* const request = await api.post('/v2/usuarios/sessoes', {
      matricula,
      senha,
      sis_sigla: "SISFARD"
    }) */
    console.log('LoginRequest', request.data)
    return request.data
  } catch (error) {
    return null
  }
}
