import { CartContext } from "@/context/cart/context";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/produto";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';

interface ProductProps {    
    id: string
    name: string
    image: string
    price: string
    category: string
    description: string
}

export default function Product() {

    const { handleAction } = useContext(CartContext)
    const [product, setProduct] = useState({
        id: '',
        name: '',
        image: '',
        price: '',
        category: '',
        description: '',
    } as ProductProps);
    const router = useRouter();
    const { productId } = router.query;

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://spyder-team.herokuapp.com/product/get/${productId}`)
            const data = await response.json()

            const fetchedProduct = data ? {
                id: data.id,
                name: data.name,
                image: `https://spyder-team.herokuapp.com/${data.image}`,
                price: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(data.price)),
                category: data.category,
                description: data.description,
            } as ProductProps : {} as ProductProps

            setProduct(fetchedProduct);
        }

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <ProductContainer>
                <ImageContainer>
                    <Image
                        src={product.image}
                        alt=''
                        width={520}
                        height={480}
                    />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>

                    <button
                        onClick={() => handleAction({
                            type: 'ADD_ITEM', payload: {
                                product,
                                quantity: 1
                            }
                        },
                            {
                                product,
                                quantity: 1
                            }
                        )}
                    >
                        Adicionar no carrinho
                    </button>
                </ProductDetails>
            </ProductContainer>
        </div >
    )

}
