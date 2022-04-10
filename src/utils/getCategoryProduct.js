const getCategoryProduct = (product, ring, earring, necklace, bangles) => {

    const categoryList = [];
    if (
        ring === false &&
        earring === false &&
        necklace === false &&
        bangles === false
    ) {
        return product;
    }

    if (ring) {
        let newList = product.filter((item) => item.category === 'ring');
        categoryList.push(...newList);
    }
    if (earring) {
        let newList = product.filter((item) => item.category === 'earring');
        categoryList.push(...newList);
    }
    if (necklace) {
        let newList = product.filter((item) => item.category === 'necklace');
        categoryList.push(...newList);
    }
    if (bangles) {
        let newList = product.filter((item) => item.category === 'bangles');
        categoryList.push(...newList);
    }

    return categoryList;

}

const getMetalCategoryProduct = (product, gold, silver, platinum) => {
    const metalList = [];
    if (gold === false &&
        silver === false &&
        platinum === false) {
            return product;
    }
    if(gold){
        let newList = product.filter((item)=>item.metal === 'gold');
        metalList.push(...newList)
    }
    if(silver){
        let newList = product.filter((item)=>item.metal === 'silver');
        metalList.push(...newList)
    }
    if(platinum){
        let newList = product.filter((item)=>item.metal === 'platinum');
        metalList.push(...newList)
    }
    return metalList;
}

export { getCategoryProduct, getMetalCategoryProduct }
