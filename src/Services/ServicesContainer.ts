import { AuthApiService } from "./AuthApiService";

class ServicesContainer
{
    public readonly authManagerService: AuthApiService = new AuthApiService();
}

export const services: ServicesContainer = new ServicesContainer();
