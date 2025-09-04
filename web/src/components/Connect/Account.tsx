import { truncateAddress } from "l/truncateAddress";
import { useAccount } from "wagmi";

export function Account() {
  const account = useAccount();

  return (
    <span
      title={`Chain ID: ${account.chainId}`}
      style={{
        cursor: "default",
        marginRight: "0.5rem",
        fontSize: "0.875rem",
        fontFamily: "monospace",
        opacity: 0.8,
      }}
    >
      {account.address && truncateAddress(account.address)}
    </span>
  );
}
