import { useCallback, useContext } from "react";

import { UserContext } from "../../Context/UserContext";
import ApiAuthenticator from "./ApiAuthenticator";
import RequireWalletGuard from "./RequireWalletGuard";

export default function RequireApiAuthenticationGuard({ children }: React.PropsWithChildren<{}>): JSX.Element
{
    const { isWalletConnected, signer, isAuthenticated, apiAccessToken, setApiAccessToken } = useContext(UserContext);
    const handleApiAuthenticationSuccess = useCallback((accessToken: string) => {
        console.log("accessToken", accessToken);
        setApiAccessToken(accessToken);
    }, []);
    const handleApiAuthenticationError = useCallback((error: Error) => {
        console.log("error", error);
    }, []);

    if (isWalletConnected === false || signer === null)
    {
        return (
            <RequireWalletGuard />
        );
    }

    if (isAuthenticated === false || apiAccessToken === null)
    {
        return (
            <ApiAuthenticator
                signer={signer}
                onSuccess={handleApiAuthenticationSuccess}
                onError={handleApiAuthenticationError}
            />
        );
    }

    return (
        <>{children}</>
    )
}
