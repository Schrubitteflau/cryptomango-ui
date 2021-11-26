import { Typography } from "@mui/material";

export default function Footer()
{
    return (
        <footer /*sx={{padding: '50px 0', backgroundColor: "red"}}*/>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">
                Something here to give the footer a purpose !
            </Typography>
        </footer>
    );
}
