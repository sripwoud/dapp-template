import { porto } from "porto/wagmi";
import { createConfig, http } from "wagmi";
import { anvil, sepolia } from "wagmi/chains";

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
export const config = createConfig({
  chains: [anvil, sepolia],
  connectors: [porto()],
  transports: {
    [anvil.id]: http(),
    [sepolia.id]: http(),
  },
});
