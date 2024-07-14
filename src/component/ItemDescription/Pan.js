import React from 'react';
import './ItemDescription.css';
import { Link } from 'react-router-dom';

function Pan() {
  return (
    <div className='book-spacing'>
        <div>
            <img className='product-img' src='https://m.media-amazon.com/images/I/71ofEi1+UnL._AC_SX679_.jpg'/>
        </div>
        <div className='text'>
            <span className='title-text'>
            GoodCook Impact Fry Pan Set
            </span><br/>
            <div className='author-space'>
            <span className='author'> <span className='form-color'>Visit the GoodCook Store</span></span><br/>
            </div>
            <span>🌟🌟🌟🌟</span> <span className='form-color'>89 ratings</span>
            <hr/>
            <div className='bottom-text'>
               <div className='bottom-space'><span><b>About this item</b></span><br/></div>
               <div className='bottom-space'><span>3-PIECE FRY PAN SET: Includes 8-in. fry pan, 10-in. fry pan, and 12-in. fry pan all with generous vessel depths so you'll always have the right pan for your needs</span><br/></div>
               <div className='bottom-space'><span>LONG-LASTING NONSTICK: Micro-divot technology and heavy-duty titanium reinforced nonstick coating offer 3x better release than typical nonstick aluminum pans and more durable cooking surface</span><br/></div>
               <div className='bottom-space'><span>SUPERIOR COOKING: Oven-safe up to 400 degrees F, distributes oil more evenly than traditional nonstick for healthier cooking, and provides even heating for all stove tops (except induction)</span><br/></div>
               <div className='bottom-space'><span>ERGONOMICALLY DESIGNED: Forged rims and bases provide added strength and warp-resistance, and ergonomic double-riveted silicone handles offer superior comfort and stay cool on the stovetop</span><br/></div>
                <div className='bottom-space'><span>EASY TO CLEAN: Dishwasher safe for a quick and easy clean up after use, but hand washing is recommended for the best long-lasting results</span><br/></div>
            </div>
        </div>
        <div>
            <form className='form'>
                <div className='price'><p className='price-size'> $39.99 </p></div>
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

export default Pan;