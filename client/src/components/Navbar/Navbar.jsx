//file for navbar
import React from 'react'
//we have different icons that we can use

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link} from "react-router-dom";
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
            
              <div className="item">
                <Link className="link" to="/products/1" >Products</Link>
              </div>
            </div>
            <div className="center">
              <Link className="link" to="/">IotCatalog</Link>
            </div>
            <div className="right">
              
            <div className="item">
              <Link className="link" to="/">Home</Link>
            </div>
            <div className="item">
              <Link className="link" to="/">About</Link>
            </div>

            <div className="item">
              <Link className="link" to="/">Contact</Link>
            </div>
            <div className="icons">
              <SearchIcon/>
              <PersonIcon/>
              <FavoriteBorderIcon/>
            </div>

            </div>
        </div>
    </div>
  );
};

export default Navbar