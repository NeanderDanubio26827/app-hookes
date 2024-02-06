import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Singin } from './pages/Singin'
import { Singup } from './pages/Singup'
import { ProtectedLayout } from './modules/seguranca/ProtectedLayout'
import { RoutesBlog } from './pages/routes'

export function Rotas() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/singin" element={<Singin />} />
        <Route path="/singup" element={<Singup />} />
        <Route
          path="/*"
          element={
            <ProtectedLayout>
              <RoutesBlog />
            </ProtectedLayout>
          }
        />
        
      </Routes>
    </BrowserRouter>
  )
}
