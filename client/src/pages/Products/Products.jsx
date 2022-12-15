import React from 'react'
import "./Products.scss";
import List from '../../components/List/List'
import { useState } from 'react';

import { useParams } from 'react-router-dom';

const Products = () => {

  const catId=parseInt(useParams().id)
  const [maxPrice,setMaxPrice]=useState(1000)
  const [sort,setSort]=useState(null)
  //categories for all different products will make it easier to search
  //make it easier to search by making it a checkbox 
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1}/>
            <label htmlFor="1">Smart Home Devices</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2}/>
            <label htmlFor="2">Smart Sensors</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3}/>
            <label htmlFor="3">Smart Cameras</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" id="4" value={4}/>
            <label htmlFor="4">Smart Lights</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="5" value={5}/>
            <label htmlFor="5">Smart Watches</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="6" value={6}/>
            <label htmlFor="6">Smart Security</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="7" value={7}/>
            <label htmlFor="7">Smart Monitors</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="8" value={8}/>
            <label htmlFor="8">Smart Speakers</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="9" value={9}/>
            <label htmlFor="9">Smart Health Trackers</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="10" value={10}/>
            <label htmlFor="10">Smart Thermostats</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="11" value={11}/>
            <label htmlFor="11">Smart Scales</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="12" value={12}/>
            <label htmlFor="12">Smart Location Tracker</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="13" value={13}/>
            <label htmlFor="13">Smart Lock</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="14" value={14}/>
            <label htmlFor="14">Smart Entertainment Device</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="15" value={15}/>
            <label htmlFor="15">Smart Networking</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="16" value={16}/>
            <label htmlFor="16">Smart Fitness Equipment</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="17" value={17}/>
            <label htmlFor="17">Smart Tv</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="18" value={18}/>
            <label htmlFor="18">Smart Doorbell</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="19" value={19}/>
            <label htmlFor="19">Smart Gaming</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="20" value={20}/>
            <label htmlFor="20">Smart Mount</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="21" value={21}/>
            <label htmlFor="21">Smart Projector</label>
          </div>
          
        </div>
        {/*we can also filter items by price */}
        <div className="filterItem">
        <h2>Filter by Price</h2>
        <div className="inputItem">
          <span>0</span>
          <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>

          <span>{maxPrice}</span>
        </div>

        </div>
        <div className="filterItem">
        <h2>Sort By</h2>
        {/*we can also sort items by descending or ascending price */}
        <div className="inputItem">
          <input type="radio" name="price" id="asc" value="asc" onChange={e=>setSort("asc")} />
          <label htmlFor="asc">Price(Lowest to Highest)</label>
        </div>
        <div className="inputItem">
          <input type="radio" name="price" id="desc" value="desc" onChange={e=>setSort("desc")}/>
          <label htmlFor="desc">Price(Highest to Lowest)</label>
        </div>


        </div>

      </div>
      <div className="right">
        <img className='catImg' src="/img/iot_circuit.jpg" alt="" />
        
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
        


      </div>
    </div>
  )
}

export default Products