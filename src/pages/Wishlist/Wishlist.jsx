import React from 'react'
import { Navbar } from '../../components'
import { useCart } from '../../context'
import { Link } from 'react-router-dom'
import './Wishlist.css';
import { showToast } from '../../utils/toast';

const Wishlist = () => {
  const { cartState: { cartItem, wishlistItem }, cartDispatch } = useCart();
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
            <div id='flex-column' className="card-footer">
              {
                cartItem.some(item => item._id === product._id) ? (
                  <Link to='/cart' className='go-cart-btn'>
                    <b>Go To Cart</b>
                  </Link>
                ) : (
                  <button onClick={() => {
                    cartDispatch({ type: 'ADD_TO_CART', payload: product })
                    showToast("success","Item added to cart")
                  }}><b>Add To Cart</b></button>
                )
              }
              <button onClick={() => {
                cartDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product })
                showToast("success","Item removed from wishlist")
              }}><b>Remove From Wishlist</b></button>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}

export { Wishlist }