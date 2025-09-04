import { useAccount } from "wagmi";
import { Account } from "./Account";
import { SignIn } from "./SignIn";
import { SignOut } from "./SignOut";

export function Connect() {
  const { status } = useAccount();

  return status === "connected"
    ? (
      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
        <Account />
        <SignOut />
      </div>
    )
    : <SignIn />;
}
