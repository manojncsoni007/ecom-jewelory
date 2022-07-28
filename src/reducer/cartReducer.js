const cartReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_CART': return {
            ...state,
            cartItem: [...action.payload]
        }
        case 'UPDATE_WISHLIST': return {
            ...state,
            wishlistItem: [...action.payload]
        }
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cartItem: [...action.payload]
            }
        default: return state;
    }
}

export { cartReducer };