import React from 'react'
import "./Product.scss";
import { useState } from 'react';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg,setSelectedImg]=useState(0)

  const images=[

    "/img/amazon air quality monitor.jpg",
    "/img/amazon_1.jpg",
    "/img/amazon_2.jpg",
    "/img/amazon_3.jpg",

    


  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}  />
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)} />
          <img src={images[2]} alt="" onClick={e=>setSelectedImg(2)}  />
          <img src={images[3]} alt="" onClick={e=>setSelectedImg(3)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>

      </div>
      <div className="right">
        <h1>Amazon Smart Air Quality Monitor</h1>
        <span className='price'>$69.99</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Enim rem est adipisci, blanditiis aliquid aliquam molestiae pariatur repudiandae obcaecati libero, 
          dolor ex minus? Veritatis odio harum, aut tempora amet molestias.</p>


      <div className='links'>
        <div className="item">
          <FavoriteBorderIcon/>FAVORITE

        </div>
        <div className="item">
          <BalanceIcon/>COMPARE
        </div>

      </div>
      <div className="info">
              <span>Vendor: Amazon</span>
              <span>Product Type: Smart Devices</span>
              <span>Tag: Smart Devices</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>

    </div>

  </div>
  )
}

export default Product