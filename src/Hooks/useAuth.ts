import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";

export function useAuth()
{
    const { isAuthenticated, apiAccessToken, setApiAccessToken, setIsAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        if (typeof apiAccessToken === "string")
        {
            // @TODO Check if valid JWT
            setIsAuthenticated(true);
        }
        else
        {
            setIsAuthenticated(false);
        }
    }, [apiAccessToken, setIsAuthenticated]);

    return {
        isAuthenticated,
        apiAccessToken,
        setApiAccessToken
    };
}
