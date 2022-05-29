import { useState } from "react";
import { Link } from "react-router-dom";
import { IWalletContext, WalletContext } from "../Context/WalletContext";
import TestButton from "./TestButton";

/*
    isConnecting: boolean;
    setIsConnecting: (isConnecting: boolean) => void;
    isWalletConnected: boolean;
    setIsWalletConnected: (isWalletConnected: boolean) => void;
    address: string | null;
    setAddress: (address: string) => void;
    provider: ethers.providers.Web3Provider | null;
    setProvider: (provider: ethers.providers.Web3Provider | null) => void;
    error: Error | null;
    setError: (error: Error | null) => void;
    */

export default function Welcome()
{
    const [ isWalletConnecting, setIsWalletConnecting ] = useState<IWalletContext["isConnecting"]>(false);
    const [ isWalletConnected, setIsWalletConnected ] = useState<IWalletContext["isWalletConnected"]>(false);
    const [ walletAddress, setWalletAddress ] = useState<IWalletContext["address"]>(null);
    const [ walletProvider, setWalletProvider ] = useState<IWalletContext["provider"]>(null);
    const [ walletError, setWalletError ] = useState<IWalletContext["error"]>(null);
    const walletContextValues: IWalletContext = {
        isConnecting: isWalletConnecting,
        setIsConnecting: setIsWalletConnecting,
        isWalletConnected,
        setIsWalletConnected,
        address: walletAddress,
        setAddress: setWalletAddress,
        provider: walletProvider,
        setProvider: setWalletProvider,
        error: walletError,
        setError: setWalletError
    };

    return (
        <>
            <WalletContext.Provider value={walletContextValues}>
                <TestButton />
                <h1>Welcome to cryptomango</h1>
                <Link to="/app">
                    Start app
                </Link>
            </WalletContext.Provider>
        </>
        
    );
}
