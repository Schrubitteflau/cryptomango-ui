import { Button } from "@mui/material";
import { useCallback, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { web3Modal } from "./web3Modal";

export default function DisconnectWalletButton(): JSX.Element
{
    const { setProvider } = useContext(UserContext);
    const handleClick = useCallback(() => {
        web3Modal.clearCachedProvider();
        setProvider(null);
    }, [])

    return (
        <Button variant="contained" color="primary" onClick={handleClick}>
            Disconnect
        </Button>
    );
}
