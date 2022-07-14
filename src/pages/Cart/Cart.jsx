import React from 'react';
import './Cart.css';
import { Navbar } from '../../components'
import { useAuth, useCart } from '../../context';
import { addToWishlist, removeFromCart, updateCartQuantity } from '../../services';
import { getTotalCartPrice } from '../../utils';

const Cart = () => {
    const { cartState: { cartItem }, cartDispatch } = useCart();
    const { token } = useAuth();

    const totalAmount = getTotalCartPrice(cartItem);

    const quanityUpdateHandler = (product, updateType) => {
        updateCartQuantity(product, updateType, token, cartDispatch)
    }


    return (
        <>
            <Navbar />
            <h4 className='title'>My Cart</h4>
            <div className="container">
                <div className="cart-container">
                    <div className="product-list">
                        <div className="product-container">
                            {
                                cartItem.map((product) => (
                                    <div className="product">
                                        <img src={product.image} alt={product.name} />
                                        <div className="product-info">
                                            <div className='product-info-body'>
                                                <h4 className='product-name'>{product.name}</h4>
                                                <p className='text-xl'>{product.price}</p>
                                            </div>
                                            <div className='cart-footer'>
                                                <div className="quantity-update">
                                                    <p>Quantity : </p>
                                                    <button
                                                        onClick={() => {
                                                            product.qty > 1 && quanityUpdateHandler(product, "decrement")
                                                        }
                                                        }>-</button>
                                                    <span className='product-qty'>{product.qty}</span>
                                                    <button
                                                        onClick={() => quanityUpdateHandler(product, "increment")}>+</button>
                                                </div>
                                                <div className="footer-btn">
                                                    <button className='wishlist-btn' onClick={() => {
                                                       addToWishlist(product,token,cartDispatch)
                                                       removeFromCart(product, token, cartDispatch)
                                                        
                                                    }}>Move to wishlist</button>
                                                    <button className='remove-btn' onClick={() => {
                                                        removeFromCart(product, token, cartDispatch)
                                                    }}>Remove From Cart</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="cart-total">
                        {
                            cartItem.length > 0 &&
                            <div className="card">
                                <div className="card-content">
                                    <p className='text-xl'><b>Price Details</b></p>
                                    <div className="price-detail">
                                        <div className="price-detail-list space-between">
                                            <p className="text-m">Price ({cartItem.length}Item)</p>
                                            <p className="text-m">{totalAmount}</p>
                                        </div>
                                        <div className="price-detail-list space-between">
                                            <p>Delivery Charges</p>
                                            <p>₹299</p>
                                        </div>
                                    </div>
                                    <div className="total-amount space-between">
                                        <p><b>Total Amount</b></p>
                                        <p><b>{totalAmount + 299}</b></p>
                                    </div>
                                    <button className="card-btn">Place Order</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export { Cart }