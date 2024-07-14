import React from 'react';
import './ItemDescription.css';
import { Link } from 'react-router-dom';

function Mixer() {
  return (
    <div className='book-spacing'>
        <div>
            <img className='product-img' src='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'/>
        </div>
        <div className='text'>
            <span className='title-text'>
            Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440
            </span><br/>
            <div className='author-space'>
            <span className='author'><span className='form-color'> Visit the SAMSUNG Store </span></span><br/>
            </div>
            <span>🌟🌟🌟🌟</span> <span className='form-color'> 6,653 ratings</span>
            <hr/>
            <div className='bottom-text'>
               <div className='bottom-space'><span><b>About this item</b></span><br/></div>
               <div className='bottom-space'><span>DUAL QHD RESOLUTION: The 5120 x 1440 super ultra-wide aspect ratio lets you view content in superfine detail</span><br/></div>
               <div className='bottom-space'><span>HDR1000 & QLED: Has a brightness rating of 1,000 nits and DCI-P3 95%, so colors are pure, bright, and true to life</span><br/></div>
               <div className='bottom-space'><span>IMMERSIVE CURVE: With a Super Ultra-Wide 32:9 ratio, the CRG9 curves around your field of view to immerse you in all the onscreen gaming action</span><br/></div>
               <div className='bottom-space'><span>AMD RADEON FREESYNC2: Effortlessly Smooth Gameplay; Supports HDR content, reduces input latency, and has low framerate compensation</span><br/></div>
               <div className='bottom-space'><span>BUILT FOR SPEED: The 120Hz settings minimize image lag and motion blur; The 60Hz settings let you optimize performance</span><br/></div>

            </div>
        </div>
        <div>
            <form className='form'>
                <div className='price'><p className='price-size'> $1,094.98 </p></div>
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