import { AxiosInstance } from "axios";

export abstract class AbstractApiService
{
    protected abstract readonly _BASE_PATH: string;

    public constructor(
        protected readonly _axios: AxiosInstance
    ) {}
}
