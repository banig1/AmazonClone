import React from 'react';
import './ItemDescription.css';
import { Link } from 'react-router-dom';

function Mixer() {
  return (
    <div className='book-spacing'>
        <div>
            <img className='product-img' src='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'/>
        </div>
        <div className='text'>
            <span className='title-text'>
            Fitbit Charge 4 Black Advanced Fitness Tracker
            </span><br/>
            <div className='author-space'>
            <span className='author'><span className='form-color'></span> </span><br/>
            </div>
            <span>🌟🌟🌟</span> <span className='form-color'>1,199 ratings </span>
            <hr/>
            <div className='bottom-text'>
               <div className='bottom-space'><span><b>About this item</b></span><br/></div>
               <div className='bottom-space'><span>1.4in l x 0.9in w x 0.5in h, Backlit OLED display, GPS, Optical heart rate monitor - 24/7 heart rate tracking, NFC, 3-axis accelerometer</span><br/></div>
               <div className='bottom-space'><span>Get call and calendar alerts, send text notifications and quick replies. Automatic sleep tracking and silent alarms on your wrist</span><br/></div>
               <div className='bottom-space'><span>Battery life up to 7 days, or up to 5 hours with continuous GPS use. Water-resistant to 50 meters.</span><br/></div>
               <div className='bottom-space'><span>Syncs with Mac OS X 12.2 and up, iPhone 5S and later, iPad 5 gen. and later, Android 7.0 and later. Syncing range: Up to 30 feet.</span><br/></div>
               <div className='bottom-space'><span>International Model - No warranty in the US. In Box: Fitbit Charge 4, Classic wristbands (both small & large), Charging cable.</span><br/></div>
            </div>
        </div>
        <div>
            <form className='form'>
                <div className='price'><p className='price-size'> $199.99 </p></div>
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