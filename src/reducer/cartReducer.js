const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': return {
            ...state,
            cartItem: [{ ...action.payload }, ...state.cartItem],
            cartItemPrice: state.cartItemPrice + action.payload.price

        }
        case 'REMOVE_FROM_CART': return {
            ...state,
            cartItem: state.cartItem.filter((item)=> item._id !== action.payload._id)
        }
        default: return state;
    }
}

export { cartReducer };