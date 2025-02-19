import { QueryProvider } from './QueryProvider'
import { RouterProvider } from './RouterProvider'
import { ThirdwebProvider } from './ThirdwebProvider'

export function Providers() {
  return (
    <ThirdwebProvider>
      <QueryProvider>
        <RouterProvider />
      </QueryProvider>
    </ThirdwebProvider>
  )
}
