import { useContext } from 'react'
import { AuthContext } from './index'


//cria um hook context prórpio
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
