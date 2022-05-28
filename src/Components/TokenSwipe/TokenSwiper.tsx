import { useEffect, useMemo, useState } from "react";
import { TokenSwipeApiService } from "../../Services";
import { GetNextTokensResponse } from "../../Services/TokenSwipeApiService";
import { Token, Network, TokenType } from "../../Types";
import TokenCard from "./TokenCard";

interface TokenSwiperProps
{
    network: Network;
    tokenType: TokenType;
    apiAccessToken: string;
}

export default function TokenSwiper({ network, tokenType, apiAccessToken }: TokenSwiperProps): JSX.Element
{
    const tokenSwipeApiService = useMemo(() => new TokenSwipeApiService(apiAccessToken), [ apiAccessToken ]);

    const [ tokens, setTokens ] = useState<Array<Token>>([]);
    const [ isLoadingTokens, setIsLoadingTokens ] = useState<boolean>(false);

    async function getNextTokens()
    {
        const tokens: GetNextTokensResponse = await tokenSwipeApiService.getNextTokens({
            chainId: network,
            contractType: tokenType
        });
        return tokens.tokens;
    }

    useEffect(() =>
    {
        setIsLoadingTokens(true);
        getNextTokens().then((tokens: Array<Token>) => {
            setTokens(tokens);
            setIsLoadingTokens(false);
        });
    }, [ tokenSwipeApiService ]);

    useEffect(() =>
    {
        // Chargement des prochains tokens avant que l'utilisateur n'ait tout passé en revue
        if (tokens.length < 4 && !isLoadingTokens)
        {
            setIsLoadingTokens(true);
            getNextTokens().then((nextTokens: Array<Token>) => {
                setTokens([ ...tokens, ...nextTokens ]);
                setIsLoadingTokens(false);
            });
        }
    }, [ tokenSwipeApiService, tokens, isLoadingTokens ]);

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