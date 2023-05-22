import { Order } from "@/@types/order";
import { User } from "@/@types/user";
import { AuthContext } from "@/context/auth/context";
import { ContaContainer, ContaInformacoes, ContaSidebar, ContaTopColumn, Info, OrderContainer, OrderTitle, ProductImage, ProductItem, ProductList, StatusTag } from "@/styles/conta";
import { FormEvent, useContext, useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface ChangePassProps {

    password: string
    newPassword: string

}

export default function ContaPage() {

    const [accountPage, setAccountPage] = useState(0)
    const { user, logout } = useContext(AuthContext)

    const [userInformations, setUserInformations] = useState({
        name: '',
        cpf: '',
        email: '',
        phone: ''
    } as User)

    const [passwords, setPasswords] = useState({
        password: '',
        newPassword: ''
    } as ChangePassProps)

    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        if (user)
            setUserInformations({
                name: user?.name,
                cpf: user?.cpf,
                email: user?.email,
                phone: user?.phone
            } as User)
    }, [user])

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            fetch(`https://spyder-team.herokuapp.com/orders/user?userEmail=${user?.email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }).then(response => response.json()).then(data => {

                const { orders } = data
                console.log(orders)
                setOrders(orders)
            })
        }
    }, [user?.email])


    //send informations when user click on save button
    const handleSaveBasicInformations = async (event: FormEvent) => {
        //prevent default form behavior
        event.preventDefault()

        console.log(userInformations)

        if (!userInformations.name || (userInformations.cpf && userInformations.cpf.length < 9) || !userInformations.phone) {
            toast.error('Preencha todos os campos!', { theme: 'dark' });
            return;
        }

        const token = localStorage.getItem('token')
        const data = {
            name: userInformations.name,
            cpf: userInformations.cpf,
            phone: userInformations.phone,
            userId: user?.id
        }

        //send informations to api
        const response = await fetch('https://spyder-team.herokuapp.com/user/update-account-informations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        //if response is ok, update user informations (use toastify)
        if (response.ok) {
            toast.success('Informações atualizadas com sucesso!', { theme: 'dark' });
        } else {
            toast.error('Erro ao atualizar informações!', { theme: 'dark' });
        }
    }

    //change password when user click on save button
    const handleSavePassword = async (event: FormEvent) => {
        //prevent default form behavior
        event.preventDefault()

        if (!passwords.password || !passwords.newPassword) {
            toast.error('Preencha todos os campos!', { theme: 'dark' });
            return;
        }

        const token = localStorage.getItem('token')
        const data = {
            password: passwords.password,
            newPassword: passwords.newPassword,
            userId: user?.id
        }

        //send informations to api
        const response = await fetch('https://spyder-team.herokuapp.com/user/change-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        //if response is ok, update user informations (use toastify)
        if (response.ok) {
            toast.success('Senha atualizada com sucesso!', { theme: 'dark' });
        } else {
            toast.error('Erro ao atualizar senha!', { theme: 'dark' });
        }
    }


    // const getStatusPercentage = (status: OrderProps['status']) => {
    //     switch (status) {
    //         case 'placed':
    //             return 33;
    //         case 'preparing':
    //             return 66;
    //         default:
    //             return 100;
    //     }
    // };

    return (

        <ContaContainer>
            <ContaSidebar>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5rem' }}>

                    <div className="image">
                        <h1>{user?.name.slice(0, 1).toUpperCase()}</h1>
                    </div>
                    <h1 style={{ color: '#FFF', fontFamily: 'Libre Franklin' }}>Olá {user?.name.split(' ')[0]}!</h1>

                </div>

                <div style={{ margin: '3rem 0', gap: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                    <button onClick={() => setAccountPage(0)} className={accountPage === 0 ? 'active' : ''}>Dados pessoais</button>
                    <button onClick={() => setAccountPage(1)} className={accountPage === 1 ? 'active' : ''}>Trocar senha</button>
                    <button onClick={() => setAccountPage(2)} className={accountPage === 2 ? 'active' : ''}>Pedidos</button>
                    <button onClick={logout}>Sair</button>
                </div>
            </ContaSidebar>

            {
                accountPage === 0 ? (
                    <div style={{
                        width: '100%'
                    }}>
                        <ContaTopColumn style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h1 style={{ color: '#FFF', fontFamily: 'Libre Franklin', marginBottom: '1rem' }}>
                                Dados pessoais
                            </h1>
                        </ContaTopColumn>

                        <ContaInformacoes onSubmit={handleSaveBasicInformations}>
                            <label>Nome <br />
                                <input
                                    type='text'
                                    value={userInformations.name}
                                    onChange={(e) => setUserInformations({ ...userInformations, name: e.target.value })}
                                    placeholder="Nome"
                                />
                                <br /><br />
                            </label>


                            <label>E-mail <br />
                                <input disabled value={userInformations?.email} style={{ width: '98%' }} type='email' placeholder="Email" />
                            </label>

                            <div className="column">
                                <label>CPF <br />
                                    <InputMask
                                        mask="999.999.999-99"
                                        maskChar={null}
                                        type='text'
                                        placeholder="CPF"
                                        value={userInformations.cpf}
                                        onChange={(e) => setUserInformations({ ...userInformations, cpf: e.target.value })}
                                    />
                                </label>
                                <label>Celular <br />
                                    <InputMask
                                        mask="(99) 99999-9999"
                                        maskChar={null}
                                        type='text'
                                        placeholder="Celular"
                                        value={userInformations.phone}
                                        onChange={(e) => setUserInformations({ ...userInformations, phone: e.target.value })}
                                    />
                                </label>
                            </div>

                            <button>Salvar informações</button>
                        </ContaInformacoes>
                    </div>
                ) : accountPage === 2 ? (
                    <div style={{ width: '48rem' }}>
                        <ContaTopColumn style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h1 style={{ color: '#FFF', fontFamily: 'Libre Franklin', marginBottom: '1rem' }}>
                                Meus Pedidos
                            </h1>
                        </ContaTopColumn>

                        {orders.map((order) => (
                            <OrderContainer key={order.id}>
                                <OrderTitle>ID do Pedido: {order.id.slice(0, 15)}</OrderTitle>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '100%'
                                    }}
                                >
                                    <div>
                                        <Info>
                                            Status: <StatusTag status={order.status as 'pending'|'succeded'|'paid'|'in-delivery'|'delivered'|'canceled'}>{order.status}</StatusTag>
                                        </Info>
                                        <Info>Status da Entrega: <StatusTag status={order.shippingStatus as 'pending'|'succeded'|'paid'|'in-delivery'|'delivered'|'canceled'}>{order.shippingStatus || '-'}</StatusTag></Info>
                                        <Info>Código de rastreio: <b>{order.trackingCode || '-'}</b></Info>
                                        <Info>Email: <b>{order.userEmail}</b></Info>
                                    </div>

                                     <div>
                                        {order.Address && <>
                                            <Info>Rua: <b>{order.Address.street}</b></Info>
                                            <Info>Bairro: <b>{order.Address.neighborhood}</b></Info>
                                            <Info>Cidade: <b>{order.Address.city}</b>-<b>{order.Address.state}</b></Info>
                                            <Info>CEP: <b>{order.Address.cep}</b></Info>
                                        </>}
                                    </div> 
                                </div>
                                <h3
                                    style={{
                                        fontFamily: 'Libre Franklin',
                                        color: '#FFF',
                                        marginTop: '1rem',
                                        fontSize: '1.5rem',
                                    }}
                                >Products:</h3>
                                <ProductList>
                                    {order.products.map((product) => (
                                        <ProductItem key={product.id}>
                                            <ProductImage src={`https://spyder-team.herokuapp.com/${product.Product.image}`} alt={product.Product.name} />
                                            <div>
                                                <h3>{product.Product.name}</h3>
                                                <p>Price: R${product.Product.price.toFixed(2)}</p>
                                                <p>Category: {product.Product.category}</p>
                                                <p>Quantity: {product.quantity}</p>
                                            </div>
                                        </ProductItem>
                                    ))}
                                </ProductList>
                            </OrderContainer>
                        ))}
                    </div>
                ) : (
                    <div style={{
                        width: '100%'
                    }}>
                        <ContaTopColumn style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h1 style={{ color: '#FFF', fontFamily: 'Libre Franklin', marginBottom: '1rem' }}>
                                Trocar senha
                            </h1>
                        </ContaTopColumn>

                        <ContaInformacoes onSubmit={handleSavePassword}>
                            <div className="column">
                                <label>Senha atual <br />
                                    <input
                                        type='password'
                                        value={passwords.password}
                                        onChange={(e) => setPasswords({ ...passwords, password: e.target.value })}
                                        placeholder="********"
                                    />
                                </label>
                                <label>Nova senha <br />
                                    <input
                                        type='password'
                                        value={passwords.newPassword}
                                        onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
                                        placeholder="********"
                                    />
                                </label>
                            </div>

                            <button>Trocar senha</button>
                        </ContaInformacoes>
                    </div>
                )
            }

            <ToastContainer />
        </ContaContainer >
    )

}