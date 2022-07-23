import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function RequireWalletGuard({ children }: React.PropsWithChildren<{}>): JSX.Element
{
    const { isConnected } = useAccount();

    if (isConnected)
    {
        return <>{children}</>;
    }

    return (isConnected ?
        <>{children}</> :
        <ConnectButton />
    );
}
