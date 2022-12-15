
import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"
const Categories = () => {
  return (
    //we want to arrange the categories piece as a section of rows and columns
    <div className='categories'>
      
      <div className="col">
        <div className="row">
          <img src="img/trending_1.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">Products</Link>
          </button>
        </div>   
        <div className="row">
        <img src="img/trending_2.jpg" alt="" />
        {/* clicking on any button will lead to products page*/}
          <button>
          
            <Link className="link" to="/products/1">Products</Link>
          </button>
        </div>

      </div>
      <div className="col">
        <div className="row">
        <img src="img/trending_3.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">Products</Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
            <img src="img/trending_4.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">Products</Link>
          </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
            <img src="img/trending_5.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">Products</Link>
          </button>
            </div>
          </div>
        </div>
        <div className="row">
        <img src="img/trending_6.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">Products</Link>
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Categories