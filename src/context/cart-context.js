import { createContext, useContext, useReducer} from "react";

const CartContext = createContext();

const reducer = (state,action) => {
    switch(action.type){
     case 'ADD_TO_CART' : return {...state, cartItem: state.cartItem + 1}
     case 'ADD_TO_WISHLIST' : return {...state, wishlist: state.wishlist + 1}
    }
}

const CartProvider = ({children}) => {
        const [state,dispatch] = useReducer(reducer,{cartItem: 0, wishlist: 0})
        const {cartItem,wishlist} = state;
    return(
        <CartContext.Provider value={{cartItem,wishlist,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export {useCart,CartProvider}
