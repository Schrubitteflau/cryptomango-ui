import { Network, Token, TokenType } from "../Types";
import { AbstractApiService } from "./AbstractApiService";

export interface GetNextTokensRequest
{
    chainId: Network;
    contractType: TokenType;
}

export interface GetNextTokensResponse
{
    tokens: Array<Token>;
}

export class TokenSwipeApiService extends AbstractApiService
{
    protected readonly _BASE_PATH: string = "/tokenSwipe";

    public async getNextTokens({ chainId, contractType }: GetNextTokensRequest): Promise<GetNextTokensResponse>
    {
        const query = new URLSearchParams({
            chainId: chainId.toString(),
            contractType: contractType.toLowerCase()
        });
        const response = await this._axios.get<GetNextTokensResponse>(`${this._BASE_PATH}/getNextTokens?${query}`);
        return response.data;
    }

    public async dismiss(): Promise<void>
    {
        await this._axios.get(`${this._BASE_PATH}/dismiss`);
    }

    public async addToList(): Promise<void>
    {
        await this._axios.get(`${this._BASE_PATH}/dismiss`);
    }
}
