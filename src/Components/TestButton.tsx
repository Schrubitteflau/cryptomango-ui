import { Button } from "@mui/material";
import { useWeb3Modal } from "../Hooks/useWeb3Modal";

export default function TestButton()
{
    const { connect, disconnect, isConnecting, isWalletConnected, address, error } = useWeb3Modal();

    if (isConnecting === true) {
        return (
            <Button variant="contained" color="primary" disabled={true}>
                Connecting...
            </Button>
        );
    }

    if (isWalletConnected === true && address !== null) {
        return (
            <>
                Connected as {address}
                <Button variant="contained" color="primary" onClick={() => disconnect(new Error("User click disconnect"))}>
                    Disconnect
                </Button>
            </>
        );
    }

    if (error !== null) {
        <div>
            Error : {error}
            <Button variant="contained" color="primary" onClick={connect}>
                Connect wallet
            </Button>
        </div>
    }

    return (
        <Button variant="contained" color="primary" onClick={connect}>
            Connect wallet
        </Button>
    );
}
