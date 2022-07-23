import { Container, Typography, Grid, Button} from "@mui/material";

export default function Home(): JSX.Element
{
    return (
        <div sx={{ backgroundColor: "red", paddingTop: 2}}>
            <Container maxWidth="sm">
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Photo Album
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Hello everyone, this is a photo album and i'm trying to make this sentence as long as possible so we can see
                </Typography>
                <div sx={{ mt: 2 }}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                See my photos
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Secondary action
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}
