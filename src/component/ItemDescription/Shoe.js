import React from 'react';
import './ItemDescription.css';
import { Link } from 'react-router-dom';

function Shoe() {
  return (
    <div className='book-spacing'>
        <div>
            <img className='product-img' src='http://www.zappos.com/images/z/2/5/4/3/7/5/2543755-5-4x.jpg'/>
        </div>
        <div className='text'>
            <span className='title-text'>
            Converse Women's All Star '70s High Top Sneakers
            </span><br/>
            <div className='author-space'>
            <span className='author'> <span className='form-color'>Brand: Converse</span></span><br/>
            </div>
            <span>🌟🌟🌟</span> <span className='form-color'> 4,849 ratings</span>
            <hr/>
            <div className='bottom-text'>
               <div className='bottom-space'><span><b>About this item</b></span><br/></div>
               <div className='bottom-space'><span>Durable canvas upper for that classic Chuck 70 look and feel.</span><br/></div>
               <div className='bottom-space'><span>OrthoLite cushioning helps to provide optimal comfort.</span><br/></div>
               <div className='bottom-space'><span>Vintage-inspired design elements like an egret midsole, ornate stitching, and a taller rubber sidewall.</span><br/></div>
               <div className='bottom-space'><span>Iconic Chuck Taylor ankle patch and vintage All Star license plate.</span><br/></div>
                <div className='bottom-space'><span>The Chuck 70 offers a blank canvas for you to tell your own stories—through style or activity. Plus, they nod to where it all began with their tried-and-true design, while modern-comfort updates bring your look into the present.</span><br/></div>
            </div>
        </div>
        <div>
            <form className='form'>
                <div className='price'><p className='price-size'> $66.04 </p></div>
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

export default Shoe;