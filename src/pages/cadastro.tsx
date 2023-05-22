import { Button, Input, Logo, LoginCard, LoginForm, PageContainer, CenteredDiv, LoginLink } from "@/styles/login";
import { useContext, useState } from "react";
import loginBanner from '../assets/register.png'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "@/context/auth/context";
import { useRouter } from "next/router";
import { BounceLoader } from "react-spinners";

export default function RegisterPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { register } = useContext(AuthContext)
    const router = useRouter()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission here
        setLoading(true);
        if(name === '' || email === '' || password === '') {
            toast.error('Preencha todos os campos!', { theme: 'dark'});
            setLoading(false);
            return;
        }

        const response = await register(name, email, password);

        if(response) {
            toast.success('Usuário cadastrado com sucesso!', { theme: 'dark'});
            router.push('/loja');
        } else {
            toast.error('Erro ao cadastrar usuário!', { theme: 'dark'});
        }

        setLoading(false);
    };

    return (

        <PageContainer>
            <LoginCard>
                <Logo src={loginBanner} alt="Company Logo" />
                <LoginForm onSubmit={handleSubmit}>
                    <div>
                        <h2>
                            Crie sua conta Spyder!
                        </h2>

                        <p>
                            Crie sua conta gratuitamente.
                        </p>
                    </div>

                    <Input type="text" placeholder="Nome" onChange={(event) => setName(event.target.value)} required />
                    <Input type="email" placeholder="E-mail" onChange={(event) => setEmail(event.target.value)} required />
                    <Input type="password" placeholder="Senha" onChange={(event) => setPassword(event.target.value)} required />
                    <Button
                        css={{
                            marginTop: '5rem'
                        }}
                        disabled={loading}
                        type="submit"
                    >
                        { !loading ? 'Criar conta' : <BounceLoader color="#FFF" size={24} />}
                    </Button>
                    <CenteredDiv>
                        Você já possui uma conta?
                        <LoginLink href="/login">Faça login</LoginLink>
                    </CenteredDiv>
                </LoginForm>
            </LoginCard>
            <ToastContainer />
        </PageContainer>

    )

}