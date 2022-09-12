import { Route, Routes } from 'react-router';

// https://youtu.be/EWYzbwRPZSs
// https://www.rainbowkit.com/
// https://wagmi.sh/

import '@rainbow-me/rainbowkit/dist/index.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
    chain,
    configureChains,
    createClient,
    WagmiConfig
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import Application from './Components/Application';
import NotFound from './Components/NotFound';
import Welcome from './Components/Welcome';
import { AuthProvider } from './Context/AuthContext';

const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [
        alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
        publicProvider()
    ]
);
const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
});
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})


// https://mui.com/system/styled/

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // extends React's HTMLAttributes
        sx?: any//SxProps<Theme>;
    }
}

const App = () => {
    // <Route path="/signup" element={<SignUp />} />
    // <Route path="/signin" element={<SignIn />} />

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider modalSize="compact" chains={chains}>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/app/*" element={
                        <AuthProvider>
                            <Application />
                        </AuthProvider>
                    } />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default App;