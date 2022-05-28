import { useCallback, useState } from "react";
import { Button } from "@mui/material";

import { ethers } from "ethers";
import { toError } from "../../Util";
import { web3Modal } from "./web3Modal";

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



interface ConnectWalletButtonProps
{
    onConnected: (signer: ethers.providers.Web3Provider) => void;
    onError: (error: Error) => void;
}

export default function ConnectWalletButton({ onConnected, onError }: ConnectWalletButtonProps): JSX.Element
{
    const [ isConnecting, setIsConnecting ] = useState<boolean>(false);

    const handleConnectButtonClick = useCallback(async () => {
        setIsConnecting(true);
        try {
            const connection = await web3Modal.connect();
            connection.on("disconnect", () => console.log("disconnect"))
            connection.on("accountsChanged", (accounts: string[]) => {
                // si accounts[0] n'est pas un string => on est déconnecté
                console.log('ACCOUNTS CHANGED' + accounts[0]);
              });
            const provider = new ethers.providers.Web3Provider(connection);
            console.log("provider", provider);
            onConnected(provider);
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
