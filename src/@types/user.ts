export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    cpf?: string;
    phone?: string;
}