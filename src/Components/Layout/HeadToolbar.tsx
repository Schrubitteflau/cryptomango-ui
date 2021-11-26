import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

interface HeadToolbarProps
{
    onDisplayMenuClick: () => void
}

export default function HeadToolbar(props: HeadToolbarProps)
{
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="default">
                    <Menu onClick={props.onDisplayMenuClick} />
                </IconButton>
                <Typography variant="h6">
                    Cryptomango
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
