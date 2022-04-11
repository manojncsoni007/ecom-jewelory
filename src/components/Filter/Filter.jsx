import React from 'react'
import { useProduct } from '../../context';
import './Filter.css';



const Filter = () => {

  const { productDispatch } = useProduct();

  return (
    <div>
      <aside className="sidebar">
        <div className="space-between">
          <p className="text-l"><b>Filter</b></p>
          <button className='clear-btn' onClick={()=>productDispatch({type:"CLEAR"})}>Clear</button>
        </div>

        <div className="filter-group">
          <p className="text-m"><b>Sort</b></p>
          <div className="filter-item">
            <label>
              <input type="radio" name="price" id="filter-price" 
              onChange={() => productDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })} />
              Price (Low to High)</label>
          </div>
          <div className="filter-item">
            <label>
              <input type="radio" name="price" id="filter-price" 
              onChange={() => productDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })} />
              Price (High to Low)</label>
          </div>
        </div>
        <div className="filter-group">
          <p className="text-m"><b>Metal</b></p>
          <div className="filter-item">
            <label>
              <input type="checkbox" name="metal" id="filter-metal" 
              onChange={()=>productDispatch({type:"GOLD"})}/>
              Gold</label>
          </div>
          <div className="filter-item">
            <label>
              <input type="checkbox" name="metal" id="filter-metal" 
              onChange={()=>productDispatch({type:"SILVER"})}/>
              Silver</label>
          </div>
          <div className="filter-item">
            <label>
              <input type="checkbox" name="metal" id="filter-metal" onChange={()=>productDispatch({type:"PLATINUM"})}/>
              Platinum</label>
          </div>
        </div>
        <div className="filter-group">
          <p className="text-m"><b>Category</b></p>
          <div className="filter-item">
            <input type="checkbox" name="Category" id="filter-category" onChange={()=>productDispatch({type:"ring"})}/>
            <label>Ring</label>
          </div>
          <div className="filter-item">
            <input type="checkbox" name="Category" id="filter-category" onChange={()=>productDispatch({type:"earring"})}/>
            <label>Earring</label>
          </div>
          <div className="filter-item">
            <input type="checkbox" name="Category" id="filter-category" onChange={()=>productDispatch({type:"necklace"})}/>
            <label>Necklace</label>
          </div>
          <div className="filter-item">
            <input type="checkbox" name="Category" id="filter-category" onChange={()=>productDispatch({type:"bangles"})}/>
            <label>Bangles</label>
          </div>
        </div>
        <div className="filter-group">
          <p className="text-m"><b>Rating</b></p>
          <div className="filter-item">
            <input type="radio" name="rating" id="filter-rating" onChange={()=>productDispatch({type:"RATING",payload:4})}/>
            <label for="">4 Stars & above</label>
          </div>
          <div className="filter-item">
            <input type="radio" name="rating" id="filter-rating" onChange={()=>productDispatch({type:"RATING",payload:3})}/>
            <label for="">3 Stars & above</label>
          </div>
          <div className="filter-item">
            <input type="radio" name="rating" id="filter-rating" onChange={()=>productDispatch({type:"RATING",payload:2})}/>
            <label for="">2 Stars & above</label>
          </div>
          <div className="filter-item">
            <input type="radio" name="rating" id="filter-rating" onChange={()=>productDispatch({type:"RATING",payload:1})}/>
            <label for="">1 Stars & above</label>
          </div>
        </div>
      </aside>

    </div>
  )
}

export { Filter }
