import axios from "axios";

interface Token
{
    name: string,
    symbol: string,
    address: string,
    type: string
}

class TokenSwipeApiService
{
    private _BASE_API: string = "http://127.0.0.1:8000";

    public async getTokens(): Promise<Array<Token>>
    {
        const response = await axios.get<Array<Token>>(`${this._BASE_API}/tokens`); 
        return response.data;
    }

    public async dismiss(): Promise<void>
    {
        await axios.get(`${this._BASE_API}/dismiss`);
    }

    public async addToList(): Promise<void>
    {
        await axios.get(`${this._BASE_API}/addToList`);
    }
}

export const tokenSwipeApiService: TokenSwipeApiService = new TokenSwipeApiService();