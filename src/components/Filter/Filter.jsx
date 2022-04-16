import React from 'react'
import { useProduct } from '../../context';
import './Filter.css';



const Filter = () => {

  const { productState, productDispatch } = useProduct();

  return (
    <div>
      <aside className="sidebar">
        <div className="space-between">
          <p className="text-l"><b>Filter</b></p>
          <button className='clear-btn' onClick={() => productDispatch({ type: "CLEAR" })}>Clear</button>
        </div>

        <div className="filter-group">
          <p className="text-m"><b>Sort</b></p>
          <div className="filter-item">
            <label>
              <input type="radio" name="price" id="filter-price" checked={productState.sortBy === "LOW_TO_HIGH"}
                onChange={() => productDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })} />
              Price (Low to High)</label>
          </div>
          <div className="filter-item">
            <label>
              <input type="radio" name="price" id="filter-price" checked={productState.sortBy === "HIGH_TO_LOW"}
                onChange={() => productDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })} />
              Price (High to Low)</label>
          </div>
        </div>
        <div className="filter-group">
          <p className="text-m"><b>Metal</b></p>
          <div className="filter-item">
            <label>
              <input type="checkbox" name="metal" id="filter-metal" checked={productState.metal.gold}
                onChange={() => productDispatch({ type: "GOLD" })} />
              Gold</label>
          </div>
          <div className="filter-item">
            <label>
              <input type="checkbox" name="metal" id="filter-metal" checked={productState.metal.silver}
                onChange={() => productDispatch({ type: "SILVER" })} />
              Silver</label>
          </div>
          <div className="filter-item">
            <label>
              <input type="checkbox" name="metal" id="filter-metal" checked={productState.metal.platinum} onChange={() => productDispatch({ type: "PLATINUM" })} />
              Platinum</label>
          </div>
        </div>
        <div className="filter-group">
          <p className="text-m"><b>Category</b></p>
          <div className="filter-item">
            <label>
              <input type="checkbox" name="Category" id="filter-category" checked={productState.category.ring} onChange={() => productDispatch({ type: "ring" })} />
              Ring</label>
          </div>
          <div className="filter-item">
            <label>
              <input type="checkbox" name="Category" id="filter-category" checked={productState.category.earring} onChange={() => productDispatch({ type: "earring" })} />
              Earring</label>
          </div>
          <div className="filter-item">
            <label>
              <input type="checkbox" name="Category" id="filter-category" checked={productState.category.necklace} onChange={() => productDispatch({ type: "necklace" })} />
              Necklace</label>
          </div>
          <div className="filter-item">
            <label>
              <input type="checkbox" name="Category" id="filter-category" checked={productState.category.bangles} onChange={() => productDispatch({ type: "bangles" })} />
              Bangles</label>
          </div>
        </div>
        <div className="filter-group">
          <p className="text-m"><b>Rating</b></p>
          <div className="filter-item">
            <label>
              <input type="radio" name="rating" id="filter-rating" checked={Number(productState.rating) === 4}
                onChange={() => productDispatch({ type: "RATING", payload: 4 })} />
              4 Stars & above</label>
          </div>
          <div className="filter-item">
            <label>
              <input type="radio" name="rating" id="filter-rating" checked={Number(productState.rating) === 3}
                onChange={() => productDispatch({ type: "RATING", payload: 3 })} />
              3 Stars & above</label>
          </div>
          <div className="filter-item">
            <label>
              <input type="radio" name="rating" id="filter-rating" checked={Number(productState.rating) === 2}
                onChange={() => productDispatch({ type: "RATING", payload: 2 })} />
              2 Stars & above</label>
          </div>
          <div className="filter-item">
            <label>
              <input type="radio" name="rating" id="filter-rating" checked={Number(productState.rating) === 1}
                onChange={() => productDispatch({ type: "RATING", payload: 1 })} />
              1 Stars & above</label>
          </div>
        </div>
      </aside>

    </div>
  )
}

export { Filter }
