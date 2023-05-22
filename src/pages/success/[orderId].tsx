import { Order } from "@/@types/order"
import { AuthContext } from "@/context/auth/context"
import { ImageContainer, SuccessContainer } from "@/styles/success"
import { GetServerSideProps } from "next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"

export default function Success() {

    const { user } = useContext(AuthContext)
    const [order, setOrder] = useState<Order | null>(null);

    const router = useRouter();
    const { orderId } = router.query;

    useEffect(() => {
        const fetchOrder = async () => {
            if (!orderId) {
                router.push('/');
                return;
            }

            const response = await fetch(`https://spyder-team.herokuapp.com/orders/${orderId}`).then(res => res.json())

            const { status, order } = response

            setOrder(order);
        }

        fetchOrder();
    }, [orderId]);

    if (!order) {
        return <div>Loading...</div>;
    }

    return (

        <SuccessContainer>
            <h1>Compra Efetuada</h1>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    gap: '1.5rem',
                    flexWrap: 'wrap'
                }}
            >
                {order.products.map(product => (
                    <ImageContainer key={product.id}>

                        <Image
                            src={`https://spyder-team.herokuapp.com/${product?.Product.image}`}
                            alt=''
                            width={120}
                            height={110}
                        />

                    </ImageContainer>
                ))}
            </div>
            <p>
                Uhuul <strong>{user?.name}</strong>, {order?.products.length > 1 ? 'seus' : 'seu'} <strong>
                    {order?.products.length > 1 ? 'produtos' : 'produto'}
                </strong> já está a caminho de sua casa.
            </p>

            <Link href="/loja">
                Voltar ao catálogo
            </Link>

        </SuccessContainer>

    )

}

// export const getServerSideProps: GetServerSideProps<any, { orderId: string }> = async ({ params }) => {

//     if (!params?.orderId) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false
//             }
//         }
//     }

//     const orderId = String(params?.orderId)

//     const response = await fetch(`https://spyder-team.herokuapp.com/orders/${orderId}`).then(res => res.json())

//     const { status, order } = response

//     if (status !== 200) {
//         return {
//             redirect: {
//                 destination: '/loja',
//                 permanent: false
//             }
//         }
//     }

//     return {
//         props: {
//             order
//         }
//     }

// }