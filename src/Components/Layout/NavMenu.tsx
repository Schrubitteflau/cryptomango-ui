import { Link } from "react-router-dom";
import { SwipeableDrawer, List, ListSubheader, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import { PhotoCamera, StarBorder } from '@mui/icons-material';

import ExpandableListItemButton from './ExpandableListItemButton';

interface NavMenuProps
{
    isOpened: boolean,
    onClose: () => void,
    onOpen: () => void
}

export default function NavMenu(props: NavMenuProps)
{
    return (
        <SwipeableDrawer
            anchor="left"
            open={props.isOpened}
            onClose={props.onClose}
            onOpen={props.onOpen}
        >

        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Cryptomango
                </ListSubheader>
            }
        >
            <Link to="/">
                <ListItemButton>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Accueil" />
                </ListItemButton>
            </Link>

            <Link to="usefulresources">
                <ListItemButton>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Ressources utiles" />
                </ListItemButton>
            </Link>

            <ExpandableListItemButton
                icon={<PhotoCamera />}
                text="TokenSwipe"
            >
                <Link to="tokenswipe/bsc">
                    <ListItemButton sx={{ paddingLeft: 4 }}>
                        <ListItemIcon>
                            <PhotoCamera />
                        </ListItemIcon>
                        <ListItemText primary="BSC" />
                    </ListItemButton>
                </Link>

                <Link to="tokenswipe/ethereum">
                    <ListItemButton sx={{ paddingLeft: 4 }}>
                        <ListItemIcon>
                            <PhotoCamera />
                        </ListItemIcon>
                        <ListItemText primary="Ethereum" />
                    </ListItemButton>
                </Link>
            </ExpandableListItemButton>

        </List>
        
        </SwipeableDrawer>
    );
}
