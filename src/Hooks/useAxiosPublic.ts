import { useEffect } from "react";

import { axiosPublic } from "./axios";

export function useAxiosPublic()
{
    useEffect(() => {
        const responseIntercept = axiosPublic.interceptors.response.use(
            response => response,
            async (error) => {
                alert(error);
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPublic.interceptors.response.eject(responseIntercept);
        }
    }, [])

    return {
        axios: axiosPublic
    };
}
