import React, { createContext } from "react";

export interface AuthContextType {
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);