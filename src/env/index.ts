import { z } from 'zod'

const envSchema = z.object({
  VITE_NODE_ENV: z.enum(['development', 'production']),
  VITE_APP_API_URL: z.string().optional(),
})

const _env = envSchema.safeParse(import.meta.env)

if (_env.success === false) {
  console.error(
    '❌ Alguma variável de ambiente está faltando',
    _env.error.format(),
  )

  throw new Error('Alguma variável de ambiente está faltando.')
}

if (!_env.data.VITE_APP_API_URL) {
  if (_env.data.VITE_NODE_ENV === 'development') {
    //_env.data.VITE_APP_API_URL = 'http://localhost:4004'
    _env.data.VITE_APP_API_URL = 'http://localhost:4000'
  } else {
    //_env.data.VITE_APP_API_URL = 'https://apis-dev.pm.ce.gov.br'
    //_env.data.VITE_APP_API_URL = 	'https://apis.pm.ce.gov.br/'
    _env.data.VITE_APP_API_URL = 	'https://apis-dev.pm.ce.gov.br'
    
  }
}

console.log('🚀 Variáveis de ambiente carregadas com sucesso')
console.log(_env.data)

export const env = _env.data
