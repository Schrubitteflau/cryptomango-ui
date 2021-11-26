import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";

interface ExpandableListItemButtonProps
{
    text: string,
    icon: React.ReactNode,
    children: React.ReactNode
}

export default function ExpandableListItemButton(props: ExpandableListItemButtonProps)
{
    const [ isExpanded, setIsExpanded ] = useState<boolean>(false);

    return (
        <>
            <ListItemButton onClick={() => setIsExpanded(!isExpanded)}>
                <ListItemIcon>
                    {props.icon}
                </ListItemIcon>
                <ListItemText primary={props.text} />
                {isExpanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {props.children}
                </List>
            </Collapse>
        </>
    );
}