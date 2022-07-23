import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import RequireWalletGuard from "../Authentication/RequireWalletGuard";

interface HeadToolbarProps
{
    onDisplayMenuClick: () => void;
}

export default function HeadToolbar(props: HeadToolbarProps): JSX.Element
{
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="default" onClick={props.onDisplayMenuClick}>
                    <Menu />
                </IconButton>
                <Typography variant="h6">
                    Cryptomango
                </Typography>
                <ConnectButton />
                <RequireWalletGuard>
                    yo
                    <ConnectButton />
                </RequireWalletGuard>
            </Toolbar>
        </AppBar>
    );
}
