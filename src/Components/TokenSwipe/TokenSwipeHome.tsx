import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Network } from "../../Types";

interface TokenSwipeHomeProps
{
    network: Network;
    routes: Array<TokenSwipeRoute>;
}

type TokenSwipeRoute = {
    path: "erc20" | "erc721" | "erc1155",
    tokenType: "ERC20" | "ERC721" | "ERC1155"
}

export default function TokenSwipeHome(props: TokenSwipeHomeProps)
{
    return (
        <>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Tokenswipe sur {props.network}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Choisissez le type de token
            </Typography>

            <Grid container spacing={2} justifyContent="center">
                {props.routes.map(route =>
                    <Grid item key={route.path}>
                        <Link to={route.path}>
                            <Button variant="contained" color="primary">
                                {route.tokenType}
                            </Button>
                        </Link>
                    </Grid>
                )}
            </Grid>
        </>
    );
}