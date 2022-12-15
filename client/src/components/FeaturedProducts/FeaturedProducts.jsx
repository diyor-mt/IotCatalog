import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../../components/Card/Card'

const FeaturedProducts = ({type}) => {
//array of temporary data 
  const data=[
    {
      id:1,
      img:"img/amazon_1.jpg",
      img2:"img/amazon_2.jpg",
      title:"Amazon Smart Air Quality Monitor",
      price: 69.99,


    },
    {
      id:2,
      img:"img/ring_1.jpg",
      img2:"img/ring_2.jpg",
      title:"Ring Alarm 5-piece kit (2nd Gen) home security system",
      price: 249.99,


    },
    {
      id:3,
      img:"img/tmezon_1.jpg",
      img2:"img/tmezon_2.jpg",
      title:"TMEZON Smart Video Doorbell Camera",
      price: 129.99,


    },
    {
      id:4,
      img:"img/flume.jpg",
      img2:"img/brilliant smart home control.jpg",
      title:"Flume 2 Smart Home Water Monitor & Water Leak Detector",
      price: 69.99,


    },
    
  ];

  
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
      </div>
      <div className="bottom">
        {/*we insert data from the array */}
        {data.map(item=>(
          <Card item={item} key={item.id}/>

        ))}
      </div>
    </div>
    
  )
}

export default FeaturedProducts