import React from 'react';
import './Cart.css';
import { Navbar } from '../../components'
import { useCart } from '../../context';

const Cart = () => {
    const { cartState: { cartItem, cartItemPrice }, cartDispatch } = useCart();

    return (
        <>
            <Navbar />
            <div className="container">
                <p className='text-xl text-center'><b>My Cart</b></p>
             
                {cartItem.map((product) => (
                    <div className="cart-container flex" key={product.id}>
                        <div className="horizontal-card">
                            <div className="card-img">
                                <img className="card-img" src={product.image} alt="" />
                            </div>
                            <div className="card-header">
                                <div>
                                    <h4>{product.name}</h4>
                                    <h5>{product.price}</h5>
                                </div>
                                <div>
                                    <button className="header-btn" onClick={() => cartDispatch({ type: 'REMOVE_FROM_CART', payload: product })}>Remove from cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {cartItem.length > 0 &&
                    <div className="card">
                        <div className="card-content">
                            <p className="text-l"><b>Price Details</b></p>
                            <div className="price-detail">
                                <div className="price-detail-list space-between">
                                    <p className="text-m">Price ({cartItem.length}Item)</p>
                                    <p className="text-m">{cartItemPrice}</p>
                                </div>
                                <div className="price-detail-list space-between">
                                    <p className="text-m">Delivery Charges</p>
                                    <p className="text-m">₹299</p>
                                </div>
                            </div>
                            <div className="total-amount space-between">
                                <p className="text-m"><b>Total Amount</b></p>
                                <p className="text-m"><b>{cartItemPrice + 299}</b></p>
                            </div>
                            <button className="card-btn">Place Order</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export { Cart }