import axios from "axios";
import { EventEmitter } from "events";

interface ISignInResponse
{
    accessToken: string;
    error: string
}

interface ISignUpResponse
{
    message: string;
    error: string;
}

export declare interface AuthManagerService
{
    on(event: "loggedIn", listener: (accessToken: string) => void): this;

    emit(event: "loggedIn", accessToken: string): boolean;
}

export class AuthManagerService extends EventEmitter
{
    private readonly _BASE_API: string = "http://127.0.0.1:8000/auth";
    private accessToken: string | null = null;

    public constructor()
    {
        super();
    }

    public isLoggedIn(): boolean
    {
        // todo : vérifier si le token est valide
        return (this.accessToken !== null);
    }

    /**
     * Must only be used is isLoggedIn() returns true
     * @returns {string} accessToken
     */
    public getAccessToken(): string
    {
        if (this.accessToken === null)
        {
            throw new Error("AccessToken is null");
        }

        return this.accessToken;
    }

    public async signIn(username: string, password: string): Promise<void>
    {
        try
        {
            const response = await axios.post<ISignInResponse>(`${this._BASE_API}/signin`, {
                username,
                password
            });

            this.accessToken = response.data.accessToken;
            this.emit("loggedIn", this.accessToken);
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

    public async signUp(email: string, username: string, password: string): Promise<string>
    {
        try
        {
            const response = await axios.post<ISignUpResponse>(`${this._BASE_API}/signup`, {
                email,
                username,
                password
            });

            return response.data.message;
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
