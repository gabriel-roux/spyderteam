import { User } from "@/@types/user";
import { createContext } from "react";


interface AuthContextProps {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    register: (name: string, email: string, password: string) => Promise<boolean>;
    validateToken: () => Promise<boolean>;
    logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);