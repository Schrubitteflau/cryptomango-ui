import { ethers } from "ethers";
import { createContext } from "react";

export interface IUserContext
{
    isWalletConnected: boolean;
    provider: ethers.providers.Web3Provider | null;
    setProvider: (signer: ethers.providers.Web3Provider | null) => void;

    isAuthenticated: boolean;
    apiAccessToken: string | null;
    setApiAccessToken: (apiAccessToken: string | null) => void;
}

export const UserContext = createContext<IUserContext>({
    isWalletConnected: false,
    provider: null,
    setProvider: () => {},
    
    isAuthenticated: false,
    apiAccessToken: null,
    setApiAccessToken: () => {}
});
