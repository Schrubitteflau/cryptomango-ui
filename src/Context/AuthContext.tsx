import { createContext, useState } from "react";

export interface IAuthContext
{
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    apiAccessToken: string | null;
    setApiAccessToken: (apiAccessToken: string | null) => void;
}

export const AuthContext = createContext<IAuthContext>({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    apiAccessToken: null,
    setApiAccessToken: () => {}
});

export function AuthProvider({ children }: React.PropsWithChildren<{}>): JSX.Element
{
    const [isAuthenticated, setIsAuthenticated] = useState<IAuthContext["isAuthenticated"]>(false);
    const [apiAccessToken, setApiAccessToken] = useState<IAuthContext["apiAccessToken"]>(null);

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            apiAccessToken,
            setApiAccessToken
        }}>
            {children}
        </AuthContext.Provider>
    );
}
