import { AuthManagerService } from "./AuthManagerService";
import { TokenSwipeApiService } from "./TokenSwipeApiService";

class ServicesContainer
{
    private _authManagerService: AuthManagerService | null = null;
    private _tokenSwipeApiService: TokenSwipeApiService | null = null;

    public getAuthManagerService(): AuthManagerService
    {
        if (this._authManagerService === null)
        {
            this._authManagerService = new AuthManagerService();
        }

        return this._authManagerService;
    }

    public getTokenSwipeApiService(): TokenSwipeApiService
    {
        if (this._tokenSwipeApiService === null)
        {
            this._tokenSwipeApiService = new TokenSwipeApiService();
        }

        return this._tokenSwipeApiService;
    }
}

export const servicesContainer: ServicesContainer = new ServicesContainer();
