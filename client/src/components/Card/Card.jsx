import React from 'react'
//file for a single product
import "./Card.scss"
import {Link} from "react-router-dom"
const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>

    {/* we do a hover effect by alternating between 2 images*/}
    <div className='card'>
        <div className="image">
        
        <img src={item.img} alt="" className='mainImg'></img>
        <img src={item.img2} alt="" className='secondImg'></img>
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
            <h3>${item.price}</h3>
        </div>
    </div>
    </Link>

  )
}

export default Card