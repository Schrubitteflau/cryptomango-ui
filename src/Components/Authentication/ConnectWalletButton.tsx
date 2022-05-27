import { useCallback, useState } from "react";
import { Button } from "@mui/material";

// https://github.com/Web3Modal/web3modal
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { toError } from "../../Util";

/*
    useEffect(() => {
        if (isWalletConnected && !isApiAuthenticated) {
            const { signer, address } = servicesContainer.getGlobalStoreService().getWallet();
            if (signer && address) {
                signer.signMessage(getDataToSign(address)).then(signature => {
                    servicesContainer.getAuthManagerService()
                        .connectWallet(address, signature).then((value) => {
                            servicesContainer.getGlobalStoreService().setApiAccessToken(value.accessToken)
                        }).catch(error => alert(error));
                }).catch(error => alert(error));
            }
        }
    }, [ isWalletConnected, isApiAuthenticated ])
    */

const providerOptions = {
    binancechainwallet: {
        package: true
    }
};

const web3Modal = new Web3Modal({
    network: "mainnet",
    theme: "dark",
    cacheProvider: true,
    providerOptions,
    disableInjectedProvider: false
});

interface ConnectWalletButtonProps
{
    onConnected: (signer: ethers.providers.JsonRpcSigner) => void;
    onError: (error: Error) => void;
}

export default function ConnectWalletButton({ onConnected, onError }: ConnectWalletButtonProps): JSX.Element
{
    const [ isConnecting, setIsConnecting ] = useState<boolean>(false);
    
    const handleConnectButtonClick = useCallback(async () => {
        setIsConnecting(true);
        try {
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            console.log("provider", provider);
            const signer: ethers.providers.JsonRpcSigner = provider.getSigner();
            console.log("signer", signer);
            onConnected(signer);
        }
        catch (error) {
            onError(toError(error));
        }
        finally {
            setIsConnecting(false);
        }
    }, [ onConnected, onError ]);

    if (isConnecting)
    {
        return (
            <Button variant="contained" color="primary" disabled={true}>
                Connecting...
            </Button>
        );
    }

    return (
        <Button variant="contained" color="primary" onClick={handleConnectButtonClick}>
            Connect wallet
        </Button>
    );
}
