import { ethers } from "ethers";
import { createContext } from "react";

export interface IUserContext
{
    isWalletConnected: boolean;
    signer: ethers.providers.JsonRpcSigner | null;
    setSigner: (signer: ethers.providers.JsonRpcSigner | null) => void;

    isAuthenticated: boolean;
    apiAccessToken: string | null;
    setApiAccessToken: (apiAccessToken: string | null) => void;
}

export const UserContext = createContext<IUserContext>({
    isWalletConnected: false,
    signer: null,
    setSigner: () => {},
    
    isAuthenticated: false,
    apiAccessToken: null,
    setApiAccessToken: () => {}
});
