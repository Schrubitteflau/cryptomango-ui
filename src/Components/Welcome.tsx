import { Link } from "react-router-dom";

import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Welcome(): JSX.Element
{
    return (
        <>
            <ConnectButton />
            <h1>Welcome to cryptomango</h1>
            <Link to="/app">
                Start app
            </Link>
        </>
    );
}
