import { ethers } from "ethers";
import { useEffect } from "react";
import { services } from "../../Services";
import { toError } from "../../Util";

function getMessageToSign(address: string): string
{
    const objToSign = {
        message: "Welcome to cryptomango !",
        address
    };
    return JSON.stringify(objToSign, null, 4);
}

export interface ApiAuthenticatorProps
{
    provider: ethers.providers.Web3Provider;
    onSuccess: (accessToken: string) => void;
    onError: (error: Error) => void;
}

export default function ApiAuthenticator({ provider, onSuccess, onError }: ApiAuthenticatorProps): JSX.Element
{
    useEffect(() => {
        async function signAndConnect() {
            try {
                const signer = provider.getSigner();
                const address: string = await signer.getAddress();
                const toSign: string = getMessageToSign(address);
                const signature: string = await signer.signMessage(toSign);
                const { accessToken } = await services.authManagerService.connectWallet({
                    address,
                    signature
                });
                onSuccess(accessToken);
            }
            catch (error) {
                console.log(error);
                onError(toError(error));
            }
        }
        signAndConnect();
    }, []);

    return <>Authenticating...</>;
}
