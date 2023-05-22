import { createContext } from "react";
import { Action, State } from "./reducers";


interface CartProps {
    cart: State
    handleAction: ({ type }: Action, payload: any) => void
}

export const CartContext = createContext({} as CartProps)