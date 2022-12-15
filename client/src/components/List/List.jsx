import React from 'react'
import "./List.scss"
import Card from "../Card/Card"
const List = () => {
//temporary data to use to populate the product page
    const data=[
        {
          id:1,
          img:"/img/amazon_1.jpg",
          img2:"/img/amazon_2.jpg",
          title:"Amazon Smart Air Quality Monitor",
          price: 69.99,
    
    
        },
        {
          id:2,
          img:"/img/ring_1.jpg",
          img2:"/img/ring_2.jpg",
          title:"Ring Alarm 5-piece kit (2nd Gen) home security system",
          price: 249.99,
    
    
        },
        {
          id:3,
          img:"/img/tmezon_1.jpg",
          img2:"/img/tmezon_2.jpg",
          title:"TMEZON Smart Video Doorbell Camera",
          price: 129.99,
    
    
        },
        {
          id:4,
          img:"/img/flume.jpg",
          img2:"/img/brilliant smart home control.jpg",
          title:"Flume 2 Smart Home Water Monitor & Water Leak Detector",
          price: 69.99,
    
    
        },

        
        
      ];
//using items fromt the array make a row of products using 
  return (
    <div className='list'>{data?.map(item=>(
        <Card item = {item} key={item.id}/>
    ))}</div>
  )
}

export default List