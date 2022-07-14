import axios from "axios"
import { showToast } from "../utils/toast";

export const addToWishlist = async (product, token, cartDispatch) => {
    try {
        const { data: { wishlist } }
            = await axios.post("/api/user/wishlist",
                { product },
                { headers: { authorization: token } }
            );
        cartDispatch({ type: "UPDATE_WISHLIST", payload: wishlist })
        showToast("success", `${product.name} added in wishlist!`)
    } catch (error) {
        showToast("error", error)
    }
}

export const removeFromWishlist = async (product, token, cartDispatch) => {
    try {
        const { data: { wishlist } }
            = await axios.delete(`/api/user/wishlist/${product._id}`,
                { headers: { authorization: token } }
            );
        cartDispatch({ type: "UPDATE_WISHLIST", payload: wishlist })
        showToast("success", `${product.name} removed from wishlist!`)

    } catch (error) {
        showToast("error", error)
    }
}