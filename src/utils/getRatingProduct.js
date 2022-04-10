 const getRatingProduct = (product,productState) => {
         return [...product].filter(item => item.rating >= productState.rating)

}

export {getRatingProduct};
