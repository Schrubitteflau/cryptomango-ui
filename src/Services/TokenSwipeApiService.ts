import { AbstractApiService } from "./AbstractApiService";

interface IToken
{
    name: string;
    symbol: string;
    address: string;
    type: string;
}

export class TokenSwipeApiService extends AbstractApiService
{
    private readonly _BASE_API: string = "http://127.0.0.1:8000/tokenSwipe";

    public constructor()
    {
        super("");
    }

    public async getTokens(): Promise<Array<IToken>>
    {
        const response = await this._axios.get<Array<IToken>>(`${this._BASE_API}/getNextTokens`); 
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
