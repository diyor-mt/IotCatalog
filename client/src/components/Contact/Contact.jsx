import React from 'react'
import "./Contact.scss"
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>Contract Us!</span>
            <div className="mail">
                <input type="text" placeholder='Enter your email'/>
                <button>Join Us</button>

            </div>
            <div className="icons">
                <FacebookIcon/>
                <GoogleIcon/>
                <TwitterIcon/>
                <InstagramIcon/>

            </div>
        </div>
    </div>
  )
}

export default Contact