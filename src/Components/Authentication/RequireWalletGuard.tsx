import { ethers } from 'ethers';
import { useCallback, useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import ConnectWalletButton from './ConnectWalletButton';

export default function RequireWalletGuard({ children }: React.PropsWithChildren<{}>): JSX.Element
{
    const { isWalletConnected, setSigner } = useContext(UserContext);
    const handleConnected = useCallback((signer: ethers.providers.JsonRpcSigner) => {
        console.log("signer", signer);
        setSigner(signer);
    }, [ setSigner ]);
    const handleError = useCallback((error: Error) => {
        console.log("error", error);
        setSigner(null);
    }, [ setSigner ])

    if (isWalletConnected)
    {
        return <>{children}</>;
    }

    return <ConnectWalletButton onConnected={handleConnected} onError={handleError}></ConnectWalletButton>
}
