import { useEffect, useState } from "react";
import { tokenSwipeApiService } from "../../Services/TokenSwipeApi";
import { Token, Network, TokenType } from "../../Types";
import TokenCard from "./TokenCard";

interface TokenSwiperProps
{
    network: Network
    tokenType: TokenType
}

export default function TokenSwiper(props: TokenSwiperProps)
{
    const [ tokens, setTokens ] = useState<Array<Token>>([]);
    const [ isLoadingTokens, setIsLoadingTokens ] = useState<boolean>(false);

    // Appelé seulement au montage du composant
    useEffect(() =>
    {
        setIsLoadingTokens(true);
        tokenSwipeApiService.getTokens().then((tokens: Array<Token>) =>
        {
            setTokens(tokens);
            setIsLoadingTokens(false);
        });
    }, []);

    useEffect(() =>
    {
        // Chargement des prochains tokens avant que l'utilisateur n'ait tout passé en revue
        if (tokens.length < 4 && !isLoadingTokens)
        {
            setIsLoadingTokens(true);
            tokenSwipeApiService.getTokens().then((nextTokens: Array<Token>) =>
            {
                setTokens([ ...tokens, ...nextTokens ]);
                setIsLoadingTokens(false);
            });
        }
    }, [ tokens, isLoadingTokens ]);

    function handleDismissToken(): void
    {
        setTokens(tokens.slice(1));
        tokenSwipeApiService.dismiss();
    }

    function handleAddToListToken(): void
    {
        setTokens(tokens.slice(1));
        tokenSwipeApiService.addToList();
    }

    return (
        tokens.length > 0 ?
            <TokenCard
                key={tokens[0].address}
                token={tokens[0]}
                onSwipeLeft={handleDismissToken}
                onSwipeRight={handleAddToListToken}
            />
            : <div>chargement...</div>
    );
}