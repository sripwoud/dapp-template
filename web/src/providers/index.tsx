import { QueryProvider } from "./QueryProvider";
import { RouterProvider } from "./RouterProvider";
import { WagmiProvider } from "./WagmiProvider";

export function Providers() {
  return (
    <WagmiProvider>
      <QueryProvider>
        <RouterProvider />
      </QueryProvider>
    </WagmiProvider>
  );
}
