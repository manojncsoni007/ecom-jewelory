import React from 'react';
import './Cart.css';
import { Navbar } from '../../components'
import { useCart } from '../../context';
import { showToast } from '../../utils/toast';

const Cart = () => {
    const { cartState: { cartItem, cartItemPrice }, cartDispatch } = useCart();

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
                                            <button className='header-btn' onClick={() => {
                                                cartDispatch({ type: 'REMOVE_FROM_CART', payload: product })
                                                showToast("success","Item removed from cart")
                                            } }>Remove From Cart</button>
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
                                            <p className="text-m">{cartItemPrice}</p>
                                        </div>
                                        <div className="price-detail-list space-between">
                                            <p>Delivery Charges</p>
                                            <p>₹299</p>
                                        </div>
                                    </div>
                                    <div className="total-amount space-between">
                                        <p><b>Total Amount</b></p>
                                        <p><b>{cartItemPrice + 299}</b></p>
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