interface BaseToken
{
    address: string;
    creationTransaction: string;
    creationTimestamp: number;
    creationTransactionIndex: number;
}

export interface ERC20Token extends BaseToken
{
    decimals: number | null;
    name: string | null;
    symbol: string | null;
}

export interface ERC721Token extends BaseToken
{
    name: string | null;
    symbol: string | null;
}

export interface ERC1155Token extends BaseToken
{
    name: string | null;
    symbol: string | null;
}

export type Token = ERC20Token | ERC721Token | ERC1155Token;

export function isERC20(token: BaseToken): token is ERC20Token
{
    return true;
}

export function isERC721(token: BaseToken): token is ERC721Token
{
    return true;
}

export function isERC1155(token: BaseToken): token is ERC1155Token
{
    return true;
}
