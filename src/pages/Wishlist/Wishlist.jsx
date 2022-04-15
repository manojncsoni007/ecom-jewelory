import React from 'react'
import { Navbar } from '../../components'
import { useCart } from '../../context'
import {Link} from 'react-router-dom'
import './Wishlist.css'

const Wishlist = () => {
    const { cartState: { cartItem,wishlistItem }, cartDispatch} = useCart();
    return (
        <>
            <Navbar />
            <h4 className='title'>My Wishlist</h4>
            <div className="product-container">
            {wishlistItem.map((product) => (
                <div className="card">
                    <div className="card-img">
                        <img id="radius" src={product.image} alt="" />
                    </div>
                    <div className="card-header">
                        <h4>{product.name}</h4>
                        <h5>{product.price}</h5>
                    </div>
                    <div className="card-footer">
                    {
                    cartItem.some(item => item._id === product._id) ? (
                      <Link to='/cart' className='go-cart-btn'>
                        <button><b>Go To Cart</b></button>
                      </Link>
                    ) : (
                      <button onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: product })}><b>Add To Cart</b></button>
                    )
                  }
                  <button onClick={() => cartDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product })}><b>Remove From Wishlist</b></button>
                    </div>
                </div>
            ))}
            </div>
        </>

    )
}

export { Wishlist }