import { useAccount } from "wagmi";

import { useAuth } from "../../Hooks/useAuth";
import ApiAuthenticator from "./ApiAuthenticator";
import RequireWalletGuard from "./RequireWalletGuard";

export default function RequireApiAuthenticationGuard({ children }: React.PropsWithChildren<{}>): JSX.Element
{
    const { isConnected } = useAccount();
    const { isAuthenticated } = useAuth();

    if (isConnected === false)
    {
        return (
            <RequireWalletGuard />
        );
    }

    if (isAuthenticated === false)
    {
        return (
            <ApiAuthenticator />
        );
    }

    return (
        <>{children}</>
    );
}
