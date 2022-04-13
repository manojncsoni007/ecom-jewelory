import { createContext, useContext, useReducer} from "react";
import { cartReducer } from "../reducer";

const CartContext = createContext();

const CartProvider = ({children}) => {
        const [cartState,cartDispatch] = useReducer(cartReducer,{cartItem: [], cartItemPrice: 0})
        return(
        <CartContext.Provider value={{cartState,cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export {useCart,CartProvider}
