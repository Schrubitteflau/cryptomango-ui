import { AuthApiService } from "./AuthApiService";
import { TokenSwipeApiService } from "./TokenSwipeApiService";

class ServicesContainer
{
    public readonly authManagerService: AuthApiService = new AuthApiService();
    public readonly tokenSwipeApiService: TokenSwipeApiService = new TokenSwipeApiService();
}

export const services: ServicesContainer = new ServicesContainer();
