import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline } from '@mui/material';

import HeadToolbar from "./Layout/HeadToolbar";
import NavMenu from './Layout/NavMenu';
import MainContainer from './Layout/MainContainer';
import Home from './Home';
import UsefulResources from './UsefulResources';
import Footer from './Layout/Footer';
import TokenSwipe from './TokenSwipe/TokenSwipe';
import { Network } from '../Types';
import RequireApiAuthenticationGuard from './Authentication/RequireApiAuthenticationGuard';

export default function Application()
{
    const [ isNavMenuOpened, setIsNavMenuOpened ] = useState<boolean>(false);

    /*
        CssBaseline is sort of CSS reset added to the <head /> of your document.
        If you are familiar with similar approaches like normalize.css which adds some default
        visual styling to default elements, resets paddings...
    */

    return (
        <>
            <CssBaseline />

            <HeadToolbar onDisplayMenuClick={() => setIsNavMenuOpened(true)} />

            <NavMenu
                isOpened={isNavMenuOpened}
                onOpen={() => setIsNavMenuOpened(true)}
                onClose={() => setIsNavMenuOpened(false)}
            />

            <main>
                <MainContainer>
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
                </MainContainer>
            </main>

            <Footer />
        </>
    );
}
