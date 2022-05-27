import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import RequireWalletGuard from "../Authentication/RequireWalletGuard";

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
                </RequireWalletGuard>
            </Toolbar>
        </AppBar>
    );
}
