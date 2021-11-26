import { useState } from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia, Slide, SlideProps, Button } from '@mui/material';
import { Token } from '../../Types/Token';

interface TokenCardProps
{
    token: Token,
    onSwipeLeft: () => void,
    onSwipeRight: () => void
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

    return (
        <Slide onExited={handleOnExited} appear={false} direction={direction} in={inAnim} mountOnEnter unmountOnExit>
            <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                <CardMedia
                    sx={{paddingTop: '56.25%'}}
                    image="/photo.jfif"
                    title="Image title"
                />
                <CardContent sx={{flexGrow: 1}}>
                    <Typography variant="h5" gutterBottom>
                        Heading
                    </Typography>
                    <Typography>
                        token name : {props.token.name}
                        token symbol : {props.token.symbol}
                        token address : {props.token.address}
                        token type : {props.token.type}
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
