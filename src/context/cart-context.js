import { createContext, useContext, useState, useReducer } from "react";
import { cartReducer } from "../reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [order, setOrder] = useState();

    const [cartState, cartDispatch] = useReducer(cartReducer, {
        cartItem: [],
        wishlistItem: []
    })
    return (
        <CartContext.Provider value={{ order, cartState, setOrder, cartDispatch }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export { useCart, CartProvider }
