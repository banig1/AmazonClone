import React from 'react';
import './ItemDescription.css';
import { Link } from 'react-router-dom';

function Mixer() {
  return (
    <div className='book-spacing'>
        <div>
            <img className='product-img' src='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'/>
        </div>
        <div className='text'>
            <span className='title-text'>
            New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)
            </span><br/>
            <div className='author-space'>
            <span className='author'><span className='form-color'>Visit the Amazon Store</span></span><br/>
            </div>
            <span>🌟🌟🌟🌟</span> <span className='form-color'> 1,668 ratings</span>
            <hr/>
            <div className='bottom-text'>
               <div className='bottom-space'><span><b>About this item</b></span><br/></div>
               <div className='bottom-space'><span>Brilliant 12.9-inch Liquid Retina XDR display with ProMotion, True Tone, and P3 wide color</span><br/></div>
               <div className='bottom-space'><span></span><br/>M2 chip with 8-core CPU and 10-core GPU</div>
               <div className='bottom-space'><span></span><br/>12MP Wide camera, 10MP Ultra Wide back camera, and LiDAR Scanner for immersive AR</div>
               <div className='bottom-space'><span>iPadOS 16 makes your iPad even more capable with powerful new productivity and collaboration features</span><br/></div>
               <div className='bottom-space'><span>Face ID for secure authentication and Apple Pay</span><br/></div>
               <div className='bottom-space'><span>USB-C connector with support for Thunderbolt / USB 4</span><br/></div>
            </div>
        </div>
        <div>
            <form className='form'>
                <div className='price'><p className='price-size'> $598.99 </p></div>
                    <div>
                        <div className='form-space'>
                            <span>Get <b>Fast, Free Shipping</b> with</span><br/>
                            <span className='form-color'>Amazon Prime</span><br/>
                            <span className='form-color'>FREE Returns </span><br/>
                        </div>
                           <span><span className='form-color'>FREE delivery</span></span><br/>
                     <div className='space-green'>
                           <span className='form-green'>In Stock</span>
                      </div>
                      <Link to={'/'}>
                      <button className='form-cart'>Back</button><br/>
                      </Link>
                      <span className='size-14'>Ships from</span> <span className='size-12'> Amazon.com</span><br/>
                      <span className='size-14'>Sold by</span> <span className='size-12'> Amazon.com</span><br/>
                     <div className='size-14-space'> <span className='size-14'>Returns</span><span className='size-12-color'>Eligible for Return, Refund or <br/>Replacement within 30 days of receipt</span></div> <br/>
                      <span className='size-14'>Payment</span> <span className='size-12-color'> Secure transaction</span><br/>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default Mixer;