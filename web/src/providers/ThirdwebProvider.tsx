import type { ReactNode } from 'react'
import { ThirdwebProvider as _ThirdwebProvider } from 'thirdweb/react'

export function ThirdwebProvider({ children }: { children: ReactNode }) {
  return <_ThirdwebProvider>{children}</_ThirdwebProvider>
}
