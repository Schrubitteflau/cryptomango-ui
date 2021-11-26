import { Routes, Route } from "react-router-dom";
import TokenSwipeHome from "./TokenSwipeHome";
import TokenSwiper from "./TokenSwiper";

interface TokenSwipeProps
{
    network: "BSC" | "Ethereum"
}

type TokenSwipeRoute = {
    path: "erc20" | "erc721" | "erc1155",
    tokenType: "ERC20" | "ERC721" | "ERC1155"
}

export default function TokenSwipe(props: TokenSwipeProps)
{
    const routes: Array<TokenSwipeRoute> = [
        { path: "erc20", tokenType: "ERC20" },
        { path: "erc721", tokenType: "ERC721" },
        { path: "erc1155", tokenType: "ERC1155" }
    ];

    return (
        <Routes>
            <Route path="/" element={<TokenSwipeHome network={props.network} routes={routes} />} />

            {routes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={<TokenSwiper network={props.network} tokenType={route.tokenType} />}
                />
            )}
        </Routes>
    );
}