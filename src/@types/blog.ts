

export interface BlogProps {

    id: string;
    title: string;
    content: string;
    image: string;
    likes: number;
    isLiked?: boolean;
    createdAt: Date;

}