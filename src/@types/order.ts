
interface Product {
    id: string;
    orderId: string;
    productId: string;
    quantity: number;

    Product: {
        id: string;
        name: string;
        description: string;
        price: number;
        category: string;
        image: string;
    }
  }

export interface Order {
    id: string;
    status: string;
    shippingStatus: string | null;
    trackingCode: string | null;
    userEmail: string;
    addressId: string;
    createdAt: string;
    updatedAt: string;
    products: Product[];
    Address: {
      id: string;
      street: string;
      neighborhood: string;
      city: string;
      state: string;
      cep: string;
      createdAt: string;
    };
    User: {
      id: string;
      name: string;
      email: string;
      password: string;
      cpf: string;
      phone: string;
      created_at: string;
    };
}