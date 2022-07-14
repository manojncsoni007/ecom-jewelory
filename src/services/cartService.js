import axios from "axios"
import { showToast } from "../utils/toast";

export const addToCart = async (product, token, cartDispatch) => {
    try {
        const { data: { cart } }
            = await axios.post("/api/user/cart",
                { product },
                { headers: { authorization: token } }
            );
        cartDispatch({ type: "UPDATE_CART", payload: cart })
        showToast("success", `${product.name} added in cart!`)

    } catch (error) {
        console.log(error)
    }
}

export const removeFromCart = async (product, token, cartDispatch) => {
    try {
        const { data: { cart } }
            = await axios.delete(`/api/user/cart/${product._id}`,
                { headers: { authorization: token } }
            );
        cartDispatch({ type: "UPDATE_CART", payload: cart })
        showToast("success", `${product.name} removed from cart!`)

    } catch (error) {
        console.log(error)
    }
}

export const updateCartQuantity = async (product, updateType, token, cartDispatch) => {
    try {
        const { data: { cart } }
            = await axios.post(`/api/user/cart/${product._id}`,
                { action: { type: updateType } },
                { headers: { authorization: token } }
            );
        cartDispatch({ type: "UPDATE_QUANTITY", payload: cart })
        showToast("success", `${product.name}'s quantity updated`)

    } catch (error) {
        console.log("error", error)
    }
}