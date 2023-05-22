import { AuthContext } from "@/context/auth/context";
import { ReactNode, useContext, useEffect } from "react";
import { Footer } from "../footer";
import { Header } from "../header";


const Layout = ({ children }: { children: ReactNode }) => {

    const { validateToken } = useContext(AuthContext);
    const pathName = typeof window !== 'undefined' ? window.location.pathname : '';

    useEffect(() => {

        const verifyToken = async () => {
            await validateToken();
        }

        //if path name is not login or register, verify token
        if(!pathName.includes('/login') && !pathName.includes('/cadastro')) {
            verifyToken()
        }

    }, [])

    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;