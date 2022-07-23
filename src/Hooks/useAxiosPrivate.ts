import { useEffect } from "react";
import { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

import { axiosPrivate } from "./axios";
import { useAuth } from "./useAuth";

export function useAxiosPrivate()
{
    const { apiAccessToken } = useAuth();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            (config: AxiosRequestConfig<any>) => {
                const headers: AxiosRequestHeaders = config.headers || {};

                if (typeof headers["Authorization"] === "undefined")
                {
                    headers["Authorization"] = `Bearer ${apiAccessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                alert(error);
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [apiAccessToken])

    return {
        axios: axiosPrivate
    };
}
