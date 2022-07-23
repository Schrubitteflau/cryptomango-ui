import axios from "axios";

import { AbstractApiService } from "./AbstractApiService";

interface ConnectWalletRequest
{
    signature: string;
    address: string;
}

interface ConnectWalletResponse
{
    accessToken: string;
}

export class AuthApiService extends AbstractApiService
{
    protected readonly _BASE_PATH: string = "/auth";

    public async connectWallet(request: ConnectWalletRequest): Promise<ConnectWalletResponse>
    {
        try {
            const response = await this._axios.post<ConnectWalletResponse>(`${this._BASE_PATH}/connectWallet`, request);
            return response.data;
        }
        catch (error)
        {
            if (axios.isAxiosError(error))
            {
                throw error.response?.data.error;
            }
            throw error;
        }
    }
}
