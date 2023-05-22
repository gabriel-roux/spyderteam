import { HeaderComponent, HeaderContainer, HeaderContent, StyledCartItem, StyledCheckoutButton, StyledCouponInput, StyledCouponInputWrapper, StyledPopup, StyledProductImage, StyledProductInfo, StyledQuantity, StyledTotal } from "./styles";
import Logo from '@/assets/logo.png'
import Image from "next/image";
import { ArrowsLeftRight, Minus, Plus, ShoppingCartSimple, User } from "phosphor-react";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { CartContext } from "@/context/cart/context";
import { it } from "node:test";
import { AuthContext } from "@/context/auth/context";

const ShoppingCart = () => {

    const { cart, handleAction } = useContext(CartContext)

    const [coupon, setCoupon] = useState('');

    const handleAddItem = (id: string) => {
        handleAction({
            type: 'INCREMENT_QUANTITY', payload: {
                productId: id
            }
        }, { productId: id });
    };

    const handleRemoveItem = (id: string, quantity: number) => {
        if (quantity > 1) {
            handleAction({
                type: 'DECREMENT_QUANTITY', payload: {
                    productId: id
                }
            }, { productId: id });
        } else {
            handleAction({
                type: 'REMOVE_ITEM', payload: {
                    productId: id
                }
            }, { productId: id });
        }
    };

    const getTotal = () => {                                  //how to remove currency and get the number?
        return cart.cartItems.reduce((total, item) => (
            total +
            (Number(
                item.product.price.replace('R$', '').replace(',', '').replace('.', '').replace(' ', '')
            ) / 100)
        ) * item.quantity, 0).toFixed(2);
    };

    const handleCheckout = () => {
        localStorage.removeItem('cart');
    };

    const { user } = useContext(AuthContext)

    return (
        <>
            <StyledPopup>
                <h2>Seu carrinho de compras</h2>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        height: 'auto',
                        maxHeight: 350,
                        overflowY: 'auto'
                    }}
                >
                    {cart.cartItems.length > 0 ? cart.cartItems.map((item) => (
                        <StyledCartItem key={item.product.id}>
                            <StyledProductImage src={item.product.image} alt={item.product.name} />
                            <StyledProductInfo>
                                <h3>{item.product.name}</h3>
                                <p>{item.product.price}</p>
                            </StyledProductInfo>
                            <StyledQuantity>
                                <button onClick={() => handleRemoveItem(item.product.id, item.quantity)}>
                                    <Minus size={20} />
                                </button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleAddItem(item.product.id)}>
                                    <Plus size={20} />
                                </button>
                            </StyledQuantity>
                        </StyledCartItem>
                    )) : (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 100,
                            width: '100%',
                            borderTop: '1px solid #ffffff47',
                            borderBottom: '1px solid #ffffff47',
                            marginBottom: '1rem',
                            paddingTop: '1rem',
                        }}>
                            <ShoppingCartSimple size={54} />
                            <h2>Carrinho vazio</h2>
                        </div>
                    )}
                </div>
                <StyledCouponInputWrapper>
                    <StyledCouponInput
                        type="text"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="Insira o código do cupom"
                    />
                </StyledCouponInputWrapper>
                <StyledTotal>
                    <span>Total:</span>
                    <span>R$ {getTotal()}</span>
                </StyledTotal>
                <form action="https://spyder-team.herokuapp.com/checkout" method="POST">
                    <input hidden name="cartItems" value={JSON.stringify([
                        ...cart.cartItems.map((item) => ({
                            productId: item.product.id, price: Number(
                                item.product.price.replace('R$', '').replace(',', '').replace('.', '').replace(' ', '')
                            ), quantity: item.quantity
                        })),
                    ])} />
                    <input hidden name="coupon" value={coupon} />
                    <input hidden name="email" value={user?.email} />
                    <StyledCheckoutButton onClick={handleCheckout}>Finalizar compra</StyledCheckoutButton>
                </form>
            </StyledPopup>
        </>
    );
};


export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const { user } = useContext(AuthContext)

    const router = useRouter();

    return (

        <HeaderComponent>
            <HeaderContainer>
                <HeaderContent>

                    <div className="firstContent">
                        <Link href='/'>
                            <Image
                                src={Logo}
                                alt='spyder team logo'
                                width={300}
                                height={50}
                                quality={100}
                            />
                        </Link>

                        <ArrowsLeftRight
                            size={20}
                            color={'#DB00FF'}
                        />

                        <Link href='/loja'>
                            LOJA
                        </Link>

                    </div>

                    <div className="secondContent">
                        <div className="linksContent">
                            <Link href="nosso-time">
                                TODO NOSSO TIME
                            </Link>
                            <Link href="novidades">
                                NOVIDADES
                            </Link>
                            <Link href="entrar-time">
                                FAÇA PARTE DO TIME
                            </Link>
                            <Link href="patrocinadores">
                                PATROCINADORES
                            </Link>
                        </div>

                        <div className="otherOptions">
                            <div style={{ position: 'relative' }}>
                                <button onClick={handleClick}>
                                    <ShoppingCartSimple color='#FFF' size={26} />
                                </button>
                                {isOpen && <ShoppingCart />}
                            </div>
                            <button onClick={() => user?.email ? router.push('/conta') : router.push('/login')}>
                                <User size={26} />
                            </button>
                        </div>
                    </div>

                </HeaderContent>
            </HeaderContainer>
        </HeaderComponent>

    )

}