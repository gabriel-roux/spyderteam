import { LancamentosContainer, Product, Products, ProductsContainer, ProductsContent } from "@/styles/loja"
import Image from "next/image"
import Link from "next/link"
import Camiseta from '../assets/camiseta1.png'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from "react"
import { ProductProps } from "@/@types/product"
import { GetStaticProps } from "next"
import { CategoryProps } from "@/@types/category"

interface LojaProps {
    products: {
        id: string
        image: string
        name: string
        price: string
        category: string
        description: string
    }[],
    categories: {
        id: string
        name: string
        slug: string
        createdAt: string
    }[]
}

export default function Loja() {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [categories, setCategories] = useState<CategoryProps[]>([]);

    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 48,
        },
    })

    useEffect(() => {
        const fetchProductsAndCategories = async () => {
            const response = await fetch('https://spyder-team.herokuapp.com/product/get-all')
            const data = await response.json()

            const fetchedProducts = Array.isArray(data)
            ? data.map((product: ProductProps) => {
                return {
                id: product.id || null,
                name: product.name || "",
                image: product.image ? `https://spyder-team.herokuapp.com/${product.image}` : "",
                price: new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(Number(product.price) || 0),
                category: product.category || "",
                description: product.description || "",
                } as ProductProps;
            })
            : [];

            setProducts(fetchedProducts);

            const responseCategories = await fetch('https://spyder-team.herokuapp.com/category/getAll')
            const dataCategories = await responseCategories.json()

            const fetchedCategories = Array.isArray(dataCategories)
            ? dataCategories.map((category: CategoryProps) => {
                return {
                    id: category.id,
                    name: category.name,
                    slug: category.slug,
                    createdAt: category.createdAt,
                } as CategoryProps
            }) : []

            setCategories(fetchedCategories);
        }

        fetchProductsAndCategories();
    }, []);

    return (
        <div>
            <LancamentosContainer ref={sliderRef} className='keen-slider'>
                {
                    products.filter(product => product.category === 'lancamento').map(product => (
                        <Link href={`/produto/${product.id}`} key={product.id}>
                            <Product className="keen-slider__slide">
                                <Image src={product.image}
                                    alt=""
                                    width={540}
                                    height={480}
                                />

                                <footer>
                                    <strong>{product.name}</strong>
                                    <span>{product.price}</span>
                                </footer>

                            </Product>
                        </Link>
                    ))
                }
            </LancamentosContainer>

            {
                categories?.map(category => (
                    <ProductsContainer key={category.id}>
                        <h2>{category.name}</h2>

                        <ProductsContent>

                            {
                                products.filter(product => product.category === category.slug).map(product => (
                                    <Products key={product.id}>
                                        <Link
                                            href={`/produto/${product.id}`}
                                            prefetch={false}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <div>
                                                <Image src={product.image}

                                                    alt=""
                                                    width={350}
                                                    height={350}
                                                />
                                            </div>

                                            <footer>
                                                <strong>{product.name}</strong>
                                                <p>{product.price}</p>
                                            </footer>

                                            <button>
                                                Comprar agora
                                            </button>
                                        </Link>
                                    </Products>

                                ))
                            }

                        </ProductsContent>

                    </ProductsContainer>

                ))
            }
        </div>
    )

}

// export const getServerSideProps = async () => {

//     const response = await fetch('https://spyder-team.herokuapp.com/product/get-all')
//     const data = await response.json()

//     const products = Array.isArray(data)
//     ? data.map((product: ProductProps) => {
//         return {
//           id: product.id || null,
//           name: product.name || "",
//           image: product.image ? `https://spyder-team.herokuapp.com/${product.image}` : "",
//           price: new Intl.NumberFormat("pt-BR", {
//             style: "currency",
//             currency: "BRL",
//           }).format(Number(product.price) || 0),
//           category: product.category || "",
//           description: product.description || "",
//         } as ProductProps;
//       })
//     : [];
  

//     const responseCategories = await fetch('https://spyder-team.herokuapp.com/category/getAll')
//     const dataCategories = await responseCategories.json()

//     const categories = Array.isArray(dataCategories)
//     ? dataCategories.map((category: CategoryProps) => {
//         return {
//             id: category.id,
//             name: category.name,
//             slug: category.slug,
//             createdAt: category.createdAt,
//         } as CategoryProps
//     }) : []

//     return {
//         props: {
//             products,
//             categories
//         },
//     }
// }