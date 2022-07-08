import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Filter, Navbar } from '../../components'
import { useProduct, useCart, useAuth } from '../../context';
import { getCategoryProduct, getRatingProduct, getSortedProduct, getMetalCategoryProduct } from '../../utils';
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { showToast } from '../../utils/toast';
import './Product.css';

const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [productItem, setProductItem] = useState([]);
  const { isLoggedIn } = useAuth();
  const { cartState: { cartItem, wishlistItem }, cartDispatch } = useCart();
  const { productState } = useProduct();


  const metalCategorizedProduct = getMetalCategoryProduct(
    productItem,
    productState.metal.gold,
    productState.metal.silver,
    productState.metal.platinum)
  const categorizedProduct = getCategoryProduct(
    metalCategorizedProduct,
    productState.category.ring,
    productState.category.earring,
    productState.category.necklace,
    productState.category.bangles)
  const ratedProduct = getRatingProduct(categorizedProduct, productState);
  const sortedProduct = getSortedProduct(ratedProduct, productState);

  useEffect(() => {
    (
      async () => {
        try {
          const { data: { products } } = await axios.get('/api/products')
          setProductItem(products)
        } catch (e) {
          console.error(e);
        }
      }
    )()
  }, [])
  return (
    <div>
      <Navbar />
      <div className="product-listing-container">
        <div className="product-listing-sidebar">
          <Filter />
        </div>
        <div className="product-listing-main">
          {
            sortedProduct.map((product) => (
              <div className="card" key={product._id}>
                {
                  wishlistItem.some(item => item._id === product._id) ? (
                    <span className="card-icon flex-center" onClick={() => {
                      cartDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product })
                      showToast("success", "Product removed from wishlist");
                    }}>
                      <FaHeart size='1.5rem' color='red' />
                    </span>
                  ) : (
                    <span className="card-icon flex-center" onClick={() => {
                      isLoggedIn ? (
                        cartDispatch({ type: 'ADD_TO_WISHLIST', payload: product })
                      ) : (
                        navigate("/login", { state: { from: location }, replace: true })
                      )
                      if (isLoggedIn) {
                        showToast("success", "Product added to wishlist")
                      }

                    }}>
                      <FaHeart size='1.5rem' />
                    </span>
                  )
                }
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
                        <b>Go To Cart</b>
                      </Link>
                    ) : (
                      <button onClick={() => {
                        isLoggedIn ? cartDispatch({ type: 'ADD_TO_CART', payload: product }) : (
                          navigate("/login", { state: { from: location }, replace: true })
                        )
                        if(isLoggedIn){
                          showToast("success","Item added to cart")
                        }
                      }}><b>Add To Cart</b></button>
                    )
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export { Product }