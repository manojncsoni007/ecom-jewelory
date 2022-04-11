import React from 'react'
import {useState,useEffect} from 'react'
import { Filter, Navbar } from '../../components'
// import{Link} from 'react-router-dom';
import axios from 'axios';
import { useProduct } from '../../context';
import './Product.css';
import { getCategoryProduct, getRatingProduct, getSortedProduct } from '../../utils';
import { getMetalCategoryProduct } from '../../utils/getCategoryProduct';


const Product = () => {
  const [productItem,setProductItem] = useState([]);
  const {productState,productDispatch} = useProduct(); 
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
  const ratedProduct = getRatingProduct(categorizedProduct,productState);
  const sortedProduct = getSortedProduct(ratedProduct,productState);

  useEffect(()=>{
    (
      async () => {
        try{
            const {data:{products}} = await axios.get('/api/products')
            setProductItem(products)
        } catch(e){
            console.log(e);
        }
      }
    )()
  },[])
  return (
    <div>
      <Navbar />
      <div className="product-listing-container">
        <div className="product-listing-sidebar">
         <Filter/>  
        </div>
        <div className="product-listing-main">
          {
            sortedProduct.map(({name,image,price,inStock})=>(
              <div className="card">
              <span className="card-badge flex-center">New</span>
              <div className="card-img">
                <img id="radius" src={image} alt=""/>
              </div>
              <div className="card-header">
                <h4>{name}</h4>
                <p className='text-xl'>{price}</p>
              </div>
              <div className="card-footer">
                <button disabled={!inStock}><a href=""><b>Add to cart</b></a> </button>
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