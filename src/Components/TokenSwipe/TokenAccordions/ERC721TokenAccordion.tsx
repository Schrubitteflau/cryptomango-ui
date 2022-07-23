import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Button } from "@mui/material";
import { ERC721Token } from '../../../Types/Token';

export interface ERC721TokenAccordionProps
{
    isExpanded: boolean;
    isDisabled: boolean;
    token: ERC721Token;
    onSave: () => void;
    onDismiss: () => void;
}

export default function ERC20TokenAccordion({ isDisabled, isExpanded, onDismiss, onSave, token }: ERC721TokenAccordionProps): JSX.Element
{
    return (
        <Accordion expanded={isExpanded} disabled={isDisabled}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{token.name} ${token.symbol}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Address : {token.address}
                Name : {token.name}
                Symbol : {token.symbol}
                Creation transaction : {token.creationTransaction}

                <Button
                    variant="contained"
                    color="success"
                    startIcon={<SendIcon />}
                    onClick={onSave}
                >
                    Save
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    endIcon={<DeleteIcon />}
                    onClick={onDismiss}
                >
                    Dismiss
                </Button>
            </Typography>
            </AccordionDetails>
        </Accordion>
    );
}
