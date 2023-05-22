import { useReducer } from 'react';

interface ProductProps {
  product: {
    id: string;
    image: string;
    name: string;
    price: string;
    category: string;
    description: string;
  };
}

export interface State {
  cartItems: {
    product: ProductProps['product'];
    quantity: number;
  }[];
}

export type Action =
  | { type: 'ADD_ITEM'; payload: { product: ProductProps['product']; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string } }
  | { type: 'INCREMENT_QUANTITY'; payload: { productId: string } }
  | { type: 'DECREMENT_QUANTITY'; payload: { productId: string } };

export const initialState: State = {
  cartItems: [],
};

//how can do the same code, but saving in localStorage

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.product.id === product.id);
      if (itemIndex >= 0) {
        return {
          ...state,
          cartItems: state.cartItems.map((item, index) => {
            if (index === itemIndex) {
              return {
                ...item,
                quantity: item.quantity + quantity,
              };
            }
            return item;
          }),
        };
      }

      localStorage.setItem('cart', JSON.stringify({
        ...state,
        cartItems: [...state.cartItems, { product, quantity }],
      }));

      return {
        ...state,
        cartItems: [...state.cartItems, { product, quantity }],
      };
    }
    case 'REMOVE_ITEM': {
      const { productId } = action.payload;
      const updatedCartItems = state.cartItems.filter((item) => item.product.id !== productId);
     
      localStorage.setItem('cart', JSON.stringify({
        ...state,
        cartItems: updatedCartItems,
      }));
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case 'INCREMENT_QUANTITY': {
      const { productId } = action.payload;
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.product.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      localStorage.setItem('cart', JSON.stringify({
        ...state,
        cartItems: updatedCartItems,
      }));

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case 'DECREMENT_QUANTITY': {
      const { productId } = action.payload;
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.product.id === productId) {
          return {
            ...item,
            quantity: Math.max(item.quantity - 1, 1),
          };
        }

        
        
        return item;
      });

      localStorage.setItem('cart', JSON.stringify({
        ...state,
        cartItems: updatedCartItems,
      }));

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    default: {
      return state;
    }
  }
}
