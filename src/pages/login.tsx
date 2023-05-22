import { AuthContext } from "@/context/auth/context";
import { Button, Input, Logo, LoginCard, LoginForm, PageContainer, CenteredDiv, LoginLink } from "@/styles/login";
import { useContext, useState } from "react";
import { BounceLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import loginBanner from '../assets/login.png'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext)

    const router = useRouter()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // create login method using the login context and check the email and password, use toastify to show the error, success message
        setLoading(true);

        if(email === '' || password === '') {
            toast.error('Preencha todos os campos!', { theme: 'dark'});
            setLoading(false);
            return;
        }

        const response = await login(email, password);

        if(response) {
            toast.success('Login realizado com sucesso!', { theme: 'dark'});
            router.push('/loja');
        } else {
            toast.error('Erro ao realizar login!', { theme: 'dark'});
        }

        
    };

    return (

        <PageContainer>
            <LoginCard>
                <Logo src={loginBanner} alt="Company Logo" />
                <LoginForm onSubmit={handleSubmit}>
                    <div>
                        <h2>
                            Faça Login na sua conta Spyder!
                        </h2>

                        <p>
                            Seja muito bem-vindo de volta!
                        </p>
                    </div>

                    <Input type="email" onChange={(event) => setEmail(event.target.value)} placeholder="E-mail" required />
                    <Input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Password" required />
                    <Button type="submit">
                        { !loading ? 'Criar conta' : <BounceLoader color="#FFF" size={24} />}
                    </Button>
                    <CenteredDiv>
                        Você não possui uma conta?
                        <LoginLink href="/cadastro">Crie agora</LoginLink>
                    </CenteredDiv>
                </LoginForm>
            </LoginCard>
            <ToastContainer />
        </PageContainer>

    )

}