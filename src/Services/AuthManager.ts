import axios from "axios";

type signInResponse = {
    accessToken: string
};

class AuthManagerService
{
    private readonly _BASE_API: string = "http://127.0.0.1:8000/auth";
    private accessToken: string | null = null;

    public isLoggedIn(): boolean
    {
        return false;
    }
    
    public getAccessToken(): string
    {
        return "";
    }

    public async signIn(username: string, password: string): Promise<string>
    {
        const response = await axios.post<signInResponse>(`${this._BASE_API}`, {
            username,
            password
        });
        const { accessToken } = response.data;

        return accessToken;
    }

    public signUp()
    {

    }
}

export const authManagerService: AuthManagerService = new AuthManagerService();
