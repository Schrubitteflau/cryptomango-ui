import { AbstractApiService } from "./AbstractApiService";
import { servicesContainer } from "./ServicesContainer";

interface IToken
{
    name: string;
    symbol: string;
    address: string;
    type: string;
}

export class TokenSwipeApiService extends AbstractApiService
{
    private readonly _BASE_API: string = "http://127.0.0.1:8000";

    public constructor()
    {
        super(servicesContainer.getAuthManagerService().getAccessToken());
    }

    public async getTokens(): Promise<Array<IToken>>
    {
        const response = await this._axios.get<Array<IToken>>(`${this._BASE_API}/tokens`); 
        return response.data;
    }

    public async dismiss(): Promise<void>
    {
        await this._axios.get(`${this._BASE_API}/dismiss`);
    }

    public async addToList(): Promise<void>
    {
        await this._axios.get(`${this._BASE_API}/addToList`);
    }
}
