import { Typography, Link } from "@mui/material";
import { SxProps } from "@mui/system";

interface CopyrightProps
{
    sx?: SxProps;
}

export default function Copyright(props: CopyrightProps)
{
    const year: number = new Date().getFullYear();

    return (
        <Typography variant="body2" align="center" sx={props.sx}>
            {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
            Cryptomango
        </Link>
            {` ${year}.`}
        </Typography>
    );
}
