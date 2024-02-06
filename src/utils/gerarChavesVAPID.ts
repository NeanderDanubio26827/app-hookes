export function gerarChavesVAPID(): { publicKey: string; privateKey: string } {
  // Gerar um par de chaves VAPID (chave pública e chave privada)
  const urlBase64 =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
  const publicKeyLength = 65
  const privateKeyLength = 43

  let publicKey = ''
  let privateKey = ''

  for (let i = 0; i < publicKeyLength; i++) {
    const randomIndex = Math.floor(Math.random() * urlBase64.length)
    publicKey += urlBase64[randomIndex]
  }

  for (let i = 0; i < privateKeyLength; i++) {
    const randomIndex = Math.floor(Math.random() * urlBase64.length)
    privateKey += urlBase64[randomIndex]
  }

  return { publicKey, privateKey }
}
