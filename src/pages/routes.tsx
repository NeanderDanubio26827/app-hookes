import { Routes, Route } from 'react-router-dom'
import { Sobre } from './Sobre'
import { Posts } from './Posts'
import { Mais } from './Mais'
import { Atividades } from './Atividades'
import { useDisclosure } from '@chakra-ui/react'
import { Home } from './Home'


export function RoutesBlog() {
  
  const {isOpen } = useDisclosure()

  return (
      <Routes>         
              <Route path="/session/home" element={<Home isOpen={isOpen}  />} />
              <Route path="/session/sobre" element={<Sobre isOpen={isOpen}  />} />
              <Route path="/session/posts" element={<Posts isOpen={isOpen}  />} />
              <Route path="/session/mais" element={<Mais isOpen={isOpen}  />} />
              <Route path="/session/atividades" element={<Atividades isOpen={isOpen} />} />
              
      </Routes>
  )
}
