import { Banner, Button, BuyNow, BuyNowContent, NewCollection, NewCollectionContent, News, NewsContent, Newsletters } from '@/styles/home'
import { ArrowRight, Heart, Share } from 'phosphor-react'

import Head from 'next/head'
import Image from 'next/image'
import BannerImg from '@/assets/homeBanner.png'
import PartnersLogos from '@/components/partners'
import BannerExampe from '@/assets/bannerExample.png'
import NewsletterBg from '@/assets/newsletter.png'
import publiBanner from '@/assets/toPubliBanner.png'
import { GetStaticProps } from 'next'
import { ProductProps } from '@/@types/product'
import { BlogProps } from '@/@types/blog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CartContext } from '@/context/cart/context'
interface HomeProps {
  products: {
    id: string
    image: string
    name: string
    price: string
    category: string
    description: string
  }[],
  posts: BlogProps[]
}
export default function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [posts, setPosts] = useState<BlogProps[]>([]);

  const router = useRouter();
  const { handleAction } = useContext(CartContext)

  useEffect(() => {
    const fetchProductsAndPosts = async () => {
      const response = await fetch('https://spyder-team.herokuapp.com/product/get-all')
      const data = await response.json()

      const fetchedProducts = data ? data
        .filter((product: ProductProps, index: number) => index < 4)
        .map((product: ProductProps) => {
          return {
            id: product.id,
            name: product.name,
            image: `https://spyder-team.herokuapp.com/${product.image}`,
            price: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(product.price)),
            category: product.category,
            description: product.description,
          } as ProductProps
        }) : []

      setProducts(fetchedProducts);

      const responseBlog = await fetch('https://spyder-team.herokuapp.com/blog/getAll?limit=40&page=1')
      const dataBlog = await responseBlog.json()

      const fetchedBlog = dataBlog.map((post: BlogProps) => {
          return {
              id: post.id,
              title: post.title,
              content: post.content,
              image: `https://spyder-team.herokuapp.com/${post.image}`,
              likes: post.likes,
              createdAt: post.createdAt,
          } as BlogProps
      })

      setPosts(fetchedBlog);
    }

    fetchProductsAndPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Spyder E-SPORTS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <Banner>
          <Image
            src={BannerImg}
            alt=''
            quality={100}
          />
        </Banner>

        <PartnersLogos />

        <NewCollection>

          <NewCollectionContent>


            <div className='firstContent'>
              <h1>
                Nova Coleção <br />
                <span>SPYDER</span>
              </h1>

              <p>
                Apresentando a nova coleção de roupas da Spyder Team - uma mistura perfeita de estilo e funcionalidade projetada para jogadores e fãs de e-sports.
              </p>

              <button onClick={() => router.push('/loja')}>
                VER MAIS <ArrowRight size={20} />
              </button>
            </div>

            <div className='secondContent'>

              <div className='firstImage'>
                <Image
                  src={BannerExampe}
                  alt=''
                  width={320}
                  height={420}
                />
              </div>
              <div className='secondImage'>
                <Image
                  src={BannerExampe}
                  alt=''
                  width={320}
                  height={420}
                />
              </div>

            </div>


          </NewCollectionContent>

        </NewCollection>

        <BuyNow>
          <BuyNowContent>
            <h1>
              COMPRE AGORA
            </h1>
            {
              products.map(product => (
                <div className='offer' key={product.id}>
                  <div className='imageContainer'>
                    <Image
                      src={product.image}
                      alt=''
                      width={320}
                      height={420}
                    />
                  </div>

                  <div className='informations'>
                    <div>
                      <h2>
                        {product.name}
                      </h2>
                      <p>{product.price}</p>
                      <p style={{
                        fontWeight: 'lighter',
                      }}>{product.description}</p>
                    </div>

                    <div className='buyButtons'>
                      <button
                        style={{
                          background: '#270D27',
                          color: '#FFF'
                        }}
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
                      )}                      >
                        Comprar agora
                      </button>
                    </div>
                  </div>
                </div>
              ))

            }

            <Button onClick={() => router.push('/loja')}>VER MAIS</Button>
          </BuyNowContent>
        </BuyNow>

        <PartnersLogos />

        <Newsletters>
          <div>
            <h2>Fique por dentro de tudo!</h2>
            <p>Se inscreva apenas digitando seu email e fique por dentro das principais novidades do<br /> mundo dos Games e de todo o time da SPYDERTEAM</p>

            <form>
              <input
                type='email'
                placeholder='Escreva seu endereço de email'
              />

              <button>
                Inscrever-se
              </button>
            </form>

          </div>
          <Image
            src={NewsletterBg}
            alt='newsletter background'
            height={570}
          />
        </Newsletters>

        <News>
          <NewsContent>
            <h1>
              NOVIDADES
            </h1>
          </NewsContent>

          <div className='latestPublications'>
            {
              posts.map(post => (
                <div className='publication' key={post.id}>
                  <header>
                    <h2>
                      SPYDERTEAM
                    </h2>
                    <small>há {formatDistanceToNow(new Date(post.createdAt), {
                      locale: ptBR
                    })}</small>

                  </header>
                  <p>
                    {post.title}
                  </p>

                  <Image
                    src={post.image}
                    alt=''
                    width={320}
                    height={420}
                  />
                </div>
              ))
            }
          </div>
          <NewsContent>
            <Button onClick={() => router.push('/novidades')}>
              VER MAIS
            </Button>
          </NewsContent>
        </News>

        <div
          style={{
            marginBottom: '5rem'
          }}
        >
          <PartnersLogos />
        </div>

      </main>
    </>
  )
}

// export const getServerSideProps = async () => {

//   const response = await fetch('https://spyder-team.herokuapp.com/product/get-all')
//   const data = await response.json()

//   const products = data ? data
//     .filter((product: ProductProps, index: number) => index < 4)
//     .map((product: ProductProps) => {
//       return {
//         id: product.id,
//         name: product.name,
//         image: `https://spyder-team.herokuapp.com/${product.image}`,
//         price: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(product.price)),
//         category: product.category,
//         description: product.description,
//       } as ProductProps
//     }) : []

//     const responseBlog = await fetch('https://spyder-team.herokuapp.com/blog/getAll?limit=40&page=1')
//     const dataBlog = await responseBlog.json()

//     const blog = dataBlog.map((post: BlogProps) => {
//         return {
//             id: post.id,
//             title: post.title,
//             content: post.content,
//             image: `https://spyder-team.herokuapp.com/${post.image}`,
//             likes: post.likes,
//             createdAt: post.createdAt,
//         } as BlogProps
//     })

//   return {
//     props: {
//       products,
//       posts: blog
//     },
//   }
// }