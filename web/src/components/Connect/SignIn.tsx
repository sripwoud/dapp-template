import { useConnect } from "wagmi";

export function SignIn() {
  const { connectors, connect } = useConnect();
  const [connector] = connectors;

  return (
    <button onClick={() => connect({ connector })} type="button">
      Sign in
    </button>
  );
}
