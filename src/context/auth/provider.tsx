import { User } from "@/@types/user";
import { useState } from "react";
import { AuthContext } from "./context";


export function AuthProvider({children}: {children: React.ReactNode}) {

    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, password: string) => {
        const response = await fetch('https://spyder-team.herokuapp.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }).then((response) => response.json());

        const { token, user } = response;

        if(token) {
            localStorage.setItem('token', token);
            setUser(user);
            return true;
        }

        return false
    }

    const register = async (name: string, email: string, password: string) => {
        const response = await fetch('https://spyder-team.herokuapp.com/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        }).then((response) => response.json());

        const { token, user } = response;

        if(token) {
            localStorage.setItem('token', token);
            setUser(user);
            return true;
        }

        return false
    }

    const validateToken = async () => {
        const token = localStorage.getItem('token');

        if(!token) {
            return false;
        }

        const response = await fetch('https://spyder-team.herokuapp.com/auth/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }).then((response) => response.json());

        const { user } = response;

        if(user) {
            setUser(user);
            return true;
        }

        return false;
    }

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        window.location.href = '/login';
    }

    return (
        <AuthContext.Provider value={{user, login, register, logout, validateToken}}>
            {children}
        </AuthContext.Provider>
    )

}