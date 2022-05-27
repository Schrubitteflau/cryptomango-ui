import axios from "axios";

interface ConnectWalletRequest
{
    signature: string;
    address: string;
}

interface ConnectWalletResponse
{
    accessToken: string;
}

export class AuthApiService
{
    private readonly _BASE_API: string = "http://127.0.0.1:8000/auth";

    public async connectWallet(request: ConnectWalletRequest): Promise<ConnectWalletResponse>
    {
        try {
            const response = await axios.post<ConnectWalletResponse>(`${this._BASE_API}/connectWallet`, request);
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
