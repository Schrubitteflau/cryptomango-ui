import { useEffect, useState } from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import HeadToolbar from "./Layout/HeadToolbar";
import NavMenu from './Layout/NavMenu';
import MainContainer from './Layout/MainContainer';
import Home from './Home';
import UsefulResources from './UsefulResources';
import Footer from './Layout/Footer';
import TokenSwipe from './TokenSwipe/TokenSwipe';
import { Network } from '../Types';
import { IUserContext, UserContext } from '../Context/UserContext';
import RequireApiAuthenticationGuard from './Authentication/RequireApiAuthenticationGuard';
import { web3Modal } from './Authentication/web3Modal';


export default function Application()
{
    const [ isNavMenuOpened, setIsNavMenuOpened ] = useState<boolean>(false);
    const [ provider, setProvider ] = useState<IUserContext["provider"]>(null);
    const [ apiAccessToken, setApiAccessToken ] = useState<IUserContext["apiAccessToken"]>(null);
    const [ userContextValue, setUserContextValue ] = useState<IUserContext>({
        isWalletConnected: false,
        provider,
        setProvider,
        isAuthenticated: false,
        apiAccessToken,
        setApiAccessToken
    });

    // Réflechir à meilleur moyen de gérer ça ?
    // Vraiment besoin de ça ?
    useEffect(() => {
        setUserContextValue({
            ...userContextValue,
            provider,
            isWalletConnected: (provider !== null)
        });

        // Provider-events
        if (provider === null) return;

        // Subscribe to accounts change
        provider.on("accountsChanged", (accounts: string[]) => {
            console.log(accounts);
        });

        // Subscribe to chainId change
        provider.on("chainChanged", (chainId: number) => {
            console.log(chainId);
        });

        // Subscribe to provider connection
        provider.on("connect", (info: { chainId: number }) => {
            console.log(info);
        });

        // Subscribe to provider disconnection
        provider.on("disconnect", (error: { code: number; message: string }) => {
            console.log(error);
            web3Modal.clearCachedProvider();
            setProvider(null);
        });
    }, [ provider ]);

    useEffect(() => {
        setUserContextValue({
            ...userContextValue,
            apiAccessToken,
            isAuthenticated: (apiAccessToken !== null)
        });
    }, [ apiAccessToken ]);

    useEffect(() => {
        if (userContextValue.provider === null)
        {
            setApiAccessToken(null);
        }
    }, [ userContextValue ]);

    /*
        CssBaseline is sort of CSS reset added to the <head /> of your document.
        If you are familiar with similar approaches like normalize.css which adds some default
        visual styling to default elements, resets paddings...
    */

    return (
        <>
            <CssBaseline />

            <UserContext.Provider value={userContextValue}>
                <HeadToolbar onDisplayMenuClick={() => setIsNavMenuOpened(true)} />
            </UserContext.Provider>

            <NavMenu
                isOpened={isNavMenuOpened}
                onOpen={() => setIsNavMenuOpened(true)}
                onClose={() => setIsNavMenuOpened(false)}
            />

            <main>
                <MainContainer>
                    <UserContext.Provider value={userContextValue}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/usefulresources" element={<UsefulResources />} />
                            <Route path="/tokenswipe/bsc/*" element={
                                <RequireApiAuthenticationGuard>
                                    <TokenSwipe network={Network.BSC} />
                                </RequireApiAuthenticationGuard>
                            } />
                            <Route path="/tokenswipe/ethereum/*" element={
                                <RequireApiAuthenticationGuard>
                                    <TokenSwipe network={Network.Ethereum} />
                                </RequireApiAuthenticationGuard>
                            } />
                        </Routes>
                    </UserContext.Provider>
                </MainContainer>
            </main>

            <Footer />
        </>
    );
}