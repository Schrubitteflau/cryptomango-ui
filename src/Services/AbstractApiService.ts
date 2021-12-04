import axios, { AxiosInstance } from "axios";

export abstract class AbstractApiService
{
    protected _axios: AxiosInstance = axios.create({
        headers: {
            Authorization: `Bearer ${this._accessToken}`
        }
    });

    public constructor(private readonly _accessToken: string) { }
}
