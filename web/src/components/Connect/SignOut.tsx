import { useDisconnect } from "wagmi";

export function SignOut() {
  const { disconnect } = useDisconnect();
  return (
    <button onClick={() => disconnect()} type="button">
      Sign out
    </button>
  );
}
