

const getSortedProduct = (product,productState) => {
    switch (productState.sortBy) {
        case 'LOW_TO_HIGH': return [...product].sort((a, b) => a.price - b.price);
        case 'HIGH_TO_LOW': return [...product].sort((a, b) => b.price - a.price)
        default: return product
    }

}

export { getSortedProduct }