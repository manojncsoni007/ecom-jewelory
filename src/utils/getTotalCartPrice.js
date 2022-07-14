
const getTotalCartPrice = (cart) => {
    return cart.reduce((total, {price,qty}) => total + Number(price) * qty ,0 );
}

export { getTotalCartPrice }