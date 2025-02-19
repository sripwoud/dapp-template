import { config } from 'l/config'
import { createThirdwebClient } from 'thirdweb'

export const thirdweb = createThirdwebClient({
  clientId: config.thirdweb.clientId,
})
