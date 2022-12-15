import React from 'react'
//file for creating a slider in the home page
import { useState } from 'react';

import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss"


const Slider = () => {
    const [currentSlide,setCurrentSlide]=useState(0)
    //we alternate between 3 images
    const data = [
        
        "img/iot2.jpg",
        "img/iot3.jpg",
        "img/iot4.jpg",


    ];
    // create a loop of going from image 3 to 1 and 1 to 3
    const prevSlide=()=>{
        setCurrentSlide(currentSlide===0 ? 2:(prev)=>prev-1);
    };
    const nextSlide=()=>{
        setCurrentSlide(currentSlide===2 ? 0:(prev)=>prev+1);
    };
  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            <img src= {data[0]}  alt="" />
            <img src= {data[1]} alt="" />
            <img src= {data[2]} alt="" />
            
            
        </div>
        {/*use arrow icons to move between images */}
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
    <WestOutlinedIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
    <EastOutlinedIcon/>
            </div>
        </div>
    </div>
  );
};

export default Slider