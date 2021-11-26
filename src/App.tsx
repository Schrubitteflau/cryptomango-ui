import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import HeadToolbar from "./Components/Layout/HeadToolbar";
import NavMenu from './Components/Layout/NavMenu';
import MainContainer from './Components/Layout/MainContainer';
import Home from './Components/Home';
import UsefulResources from './Components/UsefulResources';
import Footer from './Components/Layout/Footer';
import TokenSwipe from './Components/TokenSwipe/TokenSwipe';

// https://mui.com/system/styled/

/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

// <img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/

/*
    CssBaseline is sort of CSS reset added to the <head /> of your document.
    If you are familiar with similar approaches like normalize.css which adds some default
    visual styling to default elements, resets paddings...
*/

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      sx?: any//SxProps<Theme>;
    }
}

const App = () => {

    const [ isNavMenuOpened, setIsNavMenuOpened ] = useState<boolean>(false);

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

            <Footer></Footer>
        </>
    );
}

export default App;