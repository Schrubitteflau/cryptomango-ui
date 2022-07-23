import { useEffect, useMemo } from "react";
import { useSignMessage, useAccount } from "wagmi";

import { useAuth, useAxiosPublic } from "../../Hooks";
import { AuthApiService } from "../../Services/AuthApiService";

function getMessageToSign(address: string): string
{
    const objToSign = {
        message: "Welcome to cryptomango !",
        address
    };
    return JSON.stringify(objToSign, null, 4);
}

export default function ApiAuthenticator(): JSX.Element
{
    const { address, isConnected } = useAccount();
    const { signMessageAsync } = useSignMessage();
    const { setApiAccessToken } = useAuth();
    const { axios } = useAxiosPublic();
    const authApiService: AuthApiService = useMemo(() => new AuthApiService(axios), [ axios ]);

    useEffect(() => {
        async function signAndConnect() {
            try {
                // @TODO des fois on a ConnectorNotFound
                await new Promise((resolve) => setTimeout(resolve, 1000));
                if (!address || !isConnected) throw new Error("Address is not set or not connected");
                const signature: string = await signMessageAsync({
                    message: getMessageToSign(address)
                });

                const { accessToken } = await authApiService.connectWallet({
                    signature,
                    address
                });

                setApiAccessToken(accessToken);
            }
            catch (error) {
                console.log(error);
            }
        }
        signAndConnect();
    }, [ address, authApiService, isConnected, setApiAccessToken, signMessageAsync ]);

    return <>Authenticating...</>;
}
