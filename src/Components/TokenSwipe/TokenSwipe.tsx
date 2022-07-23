import { Routes, Route } from "react-router-dom";

import { Network } from "../../Types";
import TokenSwipeHome from "./TokenSwipeHome";
import TokenSwiperV2 from "./TokenSwiperV2";

interface TokenSwipeProps
{
    network: Network
}

type TokenSwipeRoute = {
    path: "erc20" | "erc721" | "erc1155",
    tokenType: "ERC20" | "ERC721" | "ERC1155"
}

const routes: Array<TokenSwipeRoute> = [
    { path: "erc20", tokenType: "ERC20" },
    { path: "erc721", tokenType: "ERC721" },
    { path: "erc1155", tokenType: "ERC1155" }
];

export default function TokenSwipe(props: TokenSwipeProps)
{
    return (
        <Routes>
            <Route path="/" element={<TokenSwipeHome network={props.network} routes={routes} />} />

            {routes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={
                        <TokenSwiperV2
                            network={props.network}
                            tokenType={route.tokenType}
                        />
                    }
                />
            )}
        </Routes>
    );
}
