import { createContext, useContext, useReducer} from 'react'
import { productReducer } from '../reducer'



const ProductContext = createContext();

// using use reducer

const ProductProvider = ({ children }) => {

    const [productState, productDispatch] = useReducer(productReducer, {
        sortBy: "",
        rating: 0,
        category: {
            ring: false,
            earring: false,
            necklace: false,
            bangles: false
        },
        metal:{
            gold: false,
            silver : false,
            platinum : false
        } 
    })

    return (
        <ProductContext.Provider value={{ productState, productDispatch }}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider }