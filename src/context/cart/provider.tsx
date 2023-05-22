import React, { useReducer } from "react";
import { CartContext } from "./context";
import { Action, initialState, reducer } from "./reducers";


export function CartProvider({ children }: { children: React.ReactNode }) {
  const cartLocalStorage = typeof window !== 'undefined'  ? localStorage.getItem('cart') : null;
  const initialCartState = cartLocalStorage ? JSON.parse(cartLocalStorage) : initialState;

  const [state, dispatch] = useReducer(reducer, initialCartState);

  const handleAction = ({ type }: Action, payload: any) => {
    dispatch({ type: type, payload });
  };

  return (
    <CartContext.Provider value={{ cart: state, handleAction }}>
      {children}
    </CartContext.Provider>
  );
}