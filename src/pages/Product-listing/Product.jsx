import React from 'react'
import './Product.css';
import { useState, useEffect } from 'react'
import { Filter, Navbar } from '../../components'
// import{Link} from 'react-router-dom';
import axios from 'axios';
import { useProduct, useCart } from '../../context';
import { getCategoryProduct, getRatingProduct, getSortedProduct, getMetalCategoryProduct } from '../../utils';
import { FaHeart } from "react-icons/fa";

const Product = () => {
  const [productItem, setProductItem] = useState([]);
  const { cartDispatch } = useCart();
  const { productState, productDispatch } = useProduct();
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
              <div className="card">
                <span className="card-icon flex-center"><FaHeart size='1.5rem'/></span>
                <div className="card-img">
                  <img id="radius" src={product.image} alt="" />
                </div>
                <div className="card-header">
                  <h4>{product.name}</h4>
                  <h5>{product.price}</h5>
                </div>
                <div className="card-footer">
                  <button onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: product })}><b>Add to Cart</b></button>
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