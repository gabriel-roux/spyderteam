import { NovidadesContainer, NovidadesContent, NovidadesPosts, Post, UltimosPosts } from "@/styles/novidades";
import Image from "next/image";
import postAvatar from '../assets/postAvatar.png'
import 'react-toastify/dist/ReactToastify.css'
import { Heart, Share } from "phosphor-react";
import { useEffect, useState } from "react";
import { BlogProps } from "@/@types/blog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast, ToastContainer } from "react-toastify";

interface NovidadesProps {
    blog: {
        id: string
        title: string
        content: string
        image: string
        likes: number
        createdAt: Date
    }[]
    latest: {
        id: string
        title: string
        content: string
        image: string
        likes: number
        createdAt: Date
    }[]
}

export default function Novidades() {
    const [posts, setPosts] = useState<BlogProps[]>([]);
    const [blogData, setBlogData] = useState<BlogProps[]>([]);
    const [latestData, setLatestData] = useState<BlogProps[]>([]);
  
    useEffect(() => {
      // Função para buscar os dados do blog
      const fetchBlogData = async () => {
        const response = await fetch(
          "https://spyder-team.herokuapp.com/blog/getAll?limit=40&page=1"
        );
        const data = await response.json();
  
        if (data) {
          const formattedData = data.map((post: BlogProps) => {
            return {
              ...post,
              image: `https://spyder-team.herokuapp.com/${post.image}`,
            } as BlogProps;
          });
          setBlogData(formattedData);
        }
      };
  
      // Chamar a função para buscar os dados do blog
      fetchBlogData();
    }, []);
  
    useEffect(() => {
      const formattedPosts = blogData.map((post) => {
        return {
          ...post,
          isLiked: !!localStorage.getItem(`liked-${post.id}`),
        };
      });
  
      setPosts(formattedPosts);
  
      // Filtrar os 5 últimos posts
      const latestPosts = blogData
        .sort((a: BlogProps, b: BlogProps) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        })
        .filter((post: BlogProps, index: number) => index < 5);
  
      setLatestData(latestPosts);
    }, [blogData]);

    const handleLikePost = async (postId: string) => {
        const liked = localStorage.getItem(`liked-${postId}`)
        if (liked) {
            toast.error('Você já deu like nesse post!')
            return
        }

        const response = await fetch(`https://spyder-team.herokuapp.com/blog/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                postId,
            })
        })

        toast.success('Você deu like nesse post!', { theme: 'dark' })

        const formattedPosts = posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    isLiked: true,
                    likes: post.likes + 1
                }
            }
            return post
        })

        setPosts(formattedPosts)
        localStorage.setItem(`liked-${postId}`, 'true')
    }


    return (

        <div>

            <NovidadesContainer>
                <NovidadesContent>
                    <NovidadesPosts>
                        {
                            posts.map(post => (
                                <Post key={post.id}>
                                    <Image
                                        src={postAvatar}
                                        alt=''
                                        quality={100}
                                        className='avatarImg'
                                    />

                                    <div className="box">
                                        <header>
                                            <h2>Peter - CEO</h2>
                                            <p>Há {formatDistanceToNow(new Date(post.createdAt), {
                                                locale: ptBR
                                            })} atrás</p>

                                        </header>
                                        <p>
                                            {post.content}
                                        </p>

                                        <Image
                                            src={post.image}
                                            alt=''
                                            width={540}
                                            height={480}
                                        />

                                        <footer>
                                            <div>
                                                <button
                                                    onClick={() => handleLikePost(post.id)}
                                                >
                                                    <Heart
                                                        weight={post.isLiked ? 'bold' : 'duotone'}
                                                        color={post.isLiked ? '#e65454' : '#6E767D'}
                                                        size={24}
                                                    />
                                                </button>
                                                <p>{post.likes}</p>
                                            </div>

                                            <button>
                                                <Share color='#6E767D' size={24} />
                                            </button>

                                        </footer>

                                    </div>

                                </Post>
                            ))
                        }
                    </NovidadesPosts>

                    <UltimosPosts>
                        <header>
                            <h2>Ultimos posts</h2>
                        </header>
                        {
                            latestData.map(post => (
                                <div className="box" key={post.id}>
                                    <div>
                                        <h2>Peters - CEO</h2>
                                        <p>{post.content.slice(0, 50)}...</p>
                                        <span>Publicado há {formatDistanceToNow(
                                            new Date(post.createdAt), {
                                            locale: ptBR
                                        })} atrás</span>
                                    </div>
                                    <Image
                                        src={post.image}
                                        alt=''
                                        quality={100}
                                        width={150}
                                        height={100}
                                    />
                                </div>
                            ))
                        }
                    </UltimosPosts>
                </NovidadesContent>
            </NovidadesContainer>
            <ToastContainer />
        </div>

    )

}

// export const getServerSideProps = async () => {

//     const response = await fetch('https://spyder-team.herokuapp.com/blog/getAll?limit=40&page=1')
//     const data = await response.json()

//     const blog = data ? data.map((post: BlogProps) => {
//         return {
//             id: post.id,
//             title: post.title,
//             content: post.content,
//             image: `https://spyder-team.herokuapp.com/${post.image}`,
//             likes: post.likes,
//             createdAt: post.createdAt,
//         } as BlogProps
//     }) : []

//     const blogSorted = blog.sort((a: BlogProps, b: BlogProps) => {
//         return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//     }).filter((post: BlogProps, index: number) => index < 5)

//     return {
//         props: {
//             blog,
//             latest: blogSorted
//         },
//     }
// }