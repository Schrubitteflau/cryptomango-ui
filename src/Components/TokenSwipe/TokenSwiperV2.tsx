import { useCallback, useEffect, useMemo, useState } from "react";

import { useAxiosPrivate } from "../../Hooks/useAxiosPrivate";
import { TokenSwipeApiService, GetNextTokensResponse } from "../../Services/TokenSwipeApiService";
import { Token, Network, TokenType } from "../../Types";
import AbstractTokenAccordion from "./TokenAccordions/AbstractTokenAccordion";

interface TokenSwiperProps
{
    network: Network;
    tokenType: TokenType;
}

export default function TokenSwiper({ network, tokenType }: TokenSwiperProps): JSX.Element
{
    const { axios } = useAxiosPrivate();
    const tokenSwipeApiService = useMemo(() => new TokenSwipeApiService(axios), [ axios ]);

    const [ tokens, setTokens ] = useState<ReadonlyArray<Token>>([]);
    const [ isLoadingTokens, setIsLoadingTokens ] = useState<boolean>(false);

    const getNextTokens = useCallback(async(): Promise<ReadonlyArray<Token>> =>
    {
        const tokens: GetNextTokensResponse = await tokenSwipeApiService.getNextTokens({
            chainId: network,
            contractType: tokenType
        });
        return tokens.tokens;
    }, [ network, tokenSwipeApiService, tokenType ]);

    useEffect(() =>
    {
        setIsLoadingTokens(true);
        getNextTokens().then((tokens: ReadonlyArray<Token>) => {
            setTokens(tokens);
            setIsLoadingTokens(false);
        });
    }, [ tokenSwipeApiService, getNextTokens ]);

    useEffect(() =>
    {
        // Chargement des prochains tokens avant que l'utilisateur n'ait tout passé en revue
        if (false && tokens.length < 4 && !isLoadingTokens)
        {
            setIsLoadingTokens(true);
            getNextTokens().then((nextTokens: ReadonlyArray<Token>) => {
                setTokens([ ...tokens, ...nextTokens ]);
                setIsLoadingTokens(false);
            });
        }
    }, [ tokenSwipeApiService, tokens, isLoadingTokens, getNextTokens ]);

    function handleDismissToken(): void
    {
        setTokens(tokens.slice(1));
        //tokenSwipeApiService.dismiss();
    }

    function handleAddToListToken(): void
    {
        setTokens(tokens.slice(1));
        //tokenSwipeApiService.addToList();
    }

    if (tokens.length === 0)
    {
        return (
            <div>Chargement...</div>
        );
    }

    return (
        <div>
            {tokens.map((token: Token, index: number) => {
                return (
                    <AbstractTokenAccordion
                        key={token.address}
                        isDisabled={index !== 0}
                        isExpanded={index === 0}
                        onDismiss={handleDismissToken}
                        onSave={handleAddToListToken}
                        token={token}
                        tokenType={tokenType}
                    />
                );
            })}
        </div>
    );
}
