import React from 'react';
import './Cart.css';
import { Navbar } from '../../components'
import { useAuth, useCart } from '../../context';
import { addToWishlist, removeFromCart, updateCartQuantity } from '../../services';
import { getTotalCartPrice } from '../../utils';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartState: { cartItem }, cartDispatch } = useCart();
    const { token } = useAuth();

    const totalAmount = getTotalCartPrice(cartItem);

    // const quanityUpdateHandler = (product, updateType) => {
    //     updateCartQuantity(product, updateType, token, cartDispatch)
    // }

    const throttling = (fc, limit) => {
        let flag = true;
        let context = this;
        return function (...args) {
            if (flag) {
                fc.apply(context,args);
                flag = false;
                setTimeout(() => {
                    flag = true;
                }, limit)
            }
        }
    }

    const processThrottling = throttling((prdct, uType) => {
        updateCartQuantity(prdct, uType, token, cartDispatch)
    }, 5000)


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
                                                        disabled={product.qty === 1}
                                                        onClick={() => {
                                                            product.qty > 1 && processThrottling(product, "decrement");
                                                        }
                                                        }>-</button>
                                                    <span className='product-qty'>{product.qty}</span>
                                                    <button
                                                        onClick={() => processThrottling(product, "increment")}>+</button>
                                                </div>
                                                <div className="footer-btn">
                                                    <button className='wishlist-btn' onClick={() => {
                                                        addToWishlist(product, token, cartDispatch)
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
                                    <button className="card-btn">
                                        <Link to='/checkout'>Checkout</Link></button>
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