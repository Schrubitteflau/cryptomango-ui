import { useEffect, useState } from 'react';
import { CssBaseline, Typography } from '@mui/material';
import { Routes, Route, useNavigate } from "react-router-dom";
import HeadToolbar from "./Layout/HeadToolbar";
import NavMenu from './Layout/NavMenu';
import MainContainer from './Layout/MainContainer';
import Home from './Home';
import UsefulResources from './UsefulResources';
import Footer from './Layout/Footer';
import TokenSwipe from './TokenSwipe/TokenSwipe';

export default function Application()
{
    const navigate = useNavigate();
    const [ isNavMenuOpened, setIsNavMenuOpened ] = useState<boolean>(false);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);

    useEffect(() =>
    {
        if (!isLoggedIn)
        {
            navigate("/signin", {
                replace: true
            });
        }
        else
        {
            setIsLoading(false);
        }
    }, [ isLoggedIn ]);

    if (isLoading)
    {
        return (
            <Typography variant="h2">Chargement...</Typography>
        );
    }

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
                        <Route path="/tokenswipe/bsc/*" element={<TokenSwipe network="BSC" />} />
                        <Route path="/tokenswipe/ethereum/*" element={<TokenSwipe network="Ethereum" />} />
                    </Routes>
                </MainContainer>
            </main>

            <Footer />
        </>
    );
}