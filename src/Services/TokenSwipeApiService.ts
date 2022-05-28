import { Network, TokenType } from "../Types";
import { AbstractApiService } from "./AbstractApiService";

interface IToken
{
    name: string;
    symbol: string;
    address: string;
    type: string;
}

export interface GetNextTokensRequest
{
    chainId: Network;
    contractType: TokenType;
}

export interface GetNextTokensResponse
{
    tokens: Array<IToken>;
}

export class TokenSwipeApiService extends AbstractApiService
{
    private readonly _BASE_API: string = "http://127.0.0.1:8000/tokenSwipe";

    public constructor(accessToken: string)
    {
        super(accessToken);
    }

    public async getNextTokens({ chainId, contractType }: GetNextTokensRequest): Promise<GetNextTokensResponse>
    {
        const query = new URLSearchParams({
            chainId: chainId.toString(),
            contractType: contractType.toLowerCase()
        });
        const response = await this._axios.get<GetNextTokensResponse>(`${this._BASE_API}/getNextTokens?${query}`);
        return response.data;
    }

    public async dismiss(): Promise<void>
    {
        await this._axios.get(`${this._BASE_API}/dismiss`);
    }

    public async addToList(): Promise<void>
    {
        await this._axios.get(`${this._BASE_API}/dismiss`);
    }
}
