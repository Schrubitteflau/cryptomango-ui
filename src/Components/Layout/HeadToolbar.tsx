import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import RequireWalletGuard from "../Authentication/RequireWalletGuard";
import DisconnectWalletButton from "../Authentication/DisconnectWalletButton";

interface HeadToolbarProps
{
    onDisplayMenuClick: () => void
}

export default function HeadToolbar(props: HeadToolbarProps)
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
                <RequireWalletGuard>
                    Connected as : 0x...
                    <DisconnectWalletButton />
                </RequireWalletGuard>
            </Toolbar>
        </AppBar>
    );
}
