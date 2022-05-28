import { ethers } from 'ethers';
import { useCallback, useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import ConnectWalletButton from './ConnectWalletButton';

export default function RequireWalletGuard({ children }: React.PropsWithChildren<{}>): JSX.Element
{
    const { isWalletConnected, setProvider } = useContext(UserContext);
    const handleConnected = useCallback((provider: ethers.providers.Web3Provider) => {
        console.log("provider", provider);
        setProvider(provider);
    }, [ setProvider ]);
    const handleError = useCallback((error: Error) => {
        console.log("error", error);
        setProvider(null);
    }, [ setProvider ])

    if (isWalletConnected)
    {
        return <>{children}</>;
    }

    return <ConnectWalletButton onConnected={handleConnected} onError={handleError}></ConnectWalletButton>
}
