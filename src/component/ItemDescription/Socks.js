import React from 'react';
import './ItemDescription.css';
import { Link } from 'react-router-dom';

function Socks() {
  return (
    <div className='book-spacing'>
        <div>
            <img className='product-img' src='https://tse1.mm.bing.net/th?id=OIP.0yxfXZ0Wb3dbqdrsy6IQxwHaIu&pid=Api&P=0&h=220'/>
        </div>
        <div className='text'>
            <span className='title-text'>
            Adidas Men's Athletic Cushioned Crew Socks with Arch Compression for a Secure Fit (6-Pair)
            </span><br/>
            <div className='author-space'>
            <span className='author'> <span className='form-color'>Visit the adidas Store</span></span><br/>
            </div>
            <span>🌟🌟🌟🌟</span> <span className='form-color'> 35,990 ratings </span>
            <hr/>
            <div className='bottom-text'>
               <div className='bottom-space'><span><b>About this item</b></span><br/></div>
               <div className='bottom-space'><span>97% Polyester, 3% Spandex</span><br/></div>
               <div className='bottom-space'><span>Pull On closure</span><br/></div>
               <div className='bottom-space'><span>Cushioned in the foot for comfort and durability.</span><br/></div>
               <div className='bottom-space'><span>Moisture-wicking yarns keep feet dry from sweat.</span><br/></div>
               <div className='bottom-space'><span>Arch compression for a secure fit.</span><br/></div>
            </div>
        </div>
        <div>
            <form className='form'>
                <div className='price'><p className='price-size'> $11.99 </p></div>
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

export default Socks;