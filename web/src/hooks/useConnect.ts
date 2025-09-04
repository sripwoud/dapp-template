import { useConnect as _useConnect } from "wagmi";

export const useConnect = () => {
  const { connectors, connect } = _useConnect();
  const [connector] = connectors;

  return () => connect({ connector });
};
