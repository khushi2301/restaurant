import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam, eligendi dolores amet temporibus excepturi minus magni natus quibusdam deleniti expedita quaerat. Facere quae, veniam inventore repellendus nihil voluptatem nulla!</p>
          <div className="footer-social-icon">
          <a href="https://m.facebook.com/khushi.gar.9/" target="_blank" rel="noopener noreferrer">
            <img src={assets.facebook_icon} alt="Facebook" />
          </a>
          <a href="https://x.com/GarKhushi53278" target="_blank" rel="noopener noreferrer">
            <img src={assets.facebook_icon} alt="twitter" />
          </a>
          <a href="https://www.linkedin.com/in/khushi-gar-54904a229/" target="_blank" rel="noopener noreferrer">
            <img src={assets.facebook_icon} alt="linkedin" />
          </a>
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
           </ul>
            </div>
        <div className="footer-content-right">
         <h2>GET IN TOUCH</h2>
         <ul>
            <li>+91-0141-2024</li>
            <li>contact@tomato.com</li>
       </ul>
        </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Tomato.com. All Right Reserved.</p>
    </div>
  )
}

export default Footer
