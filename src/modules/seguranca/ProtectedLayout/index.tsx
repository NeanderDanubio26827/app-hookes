import { useToast } from '@chakra-ui/react'
import { ReactNode, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../../context/AuthProvider/useAuth'

export const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  const auth = useAuth()
  const location = useLocation()
  const toast = useToast()
  const isAuthenticated = auth.isTokenValid()

  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: 'Sessão encerrada!',
        position: 'top-right',
        status: 'error',
        colorScheme: 'red',
        duration: 3000,
        isClosable: true,
      })
    }
  }, [isAuthenticated, location, toast])

  if (!isAuthenticated) {
    return <Navigate to={'/singin'} />
  }
  return children
}
