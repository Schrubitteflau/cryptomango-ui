import { useState } from 'react';
import { Typography, Card, CardActions, CardContent, Slide, SlideProps, Button } from '@mui/material';
import { Token } from '../../Types/Token';

interface TokenCardProps
{
    token: Token;
    onSwipeLeft: () => void;
    onSwipeRight: () => void;
}

export default function TokenCard(props: TokenCardProps)
{
    const [ direction, setDirection ] = useState<SlideProps["direction"]>("right");
    const [ inAnim, setInAnim ] = useState<boolean>(true);

    function handleSwipeLeft(): void
    {
        setDirection("right");
        setInAnim(false);
    }

    function handleSwipeRight(): void
    {
        setDirection("left");
        setInAnim(false);
    }

    function handleOnExited(): void
    {
        direction === "right" ? props.onSwipeLeft() : props.onSwipeRight();
    }

    /*
    <CardMedia
        sx={{paddingTop: '56.25%'}}
        image="/photo.jfif"
        title="Image title"
    />
    */

    return (
        <Slide onExited={handleOnExited} appear={false} direction={direction} in={inAnim} mountOnEnter unmountOnExit>
            <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flexGrow: 1}}>
                    <Typography variant="h5" gutterBottom>
                        Heading
                    </Typography>
                    <Typography>
                        token name : {props.token.name}
                        token symbol : {props.token.symbol}
                        token address : {props.token.address}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={handleSwipeLeft}>
                        Swipe left
                    </Button>
                    <Button size="small" color="primary" onClick={handleSwipeRight}>
                        Swipe right
                    </Button>
                </CardActions>
            </Card>
        </Slide>
    );
}
