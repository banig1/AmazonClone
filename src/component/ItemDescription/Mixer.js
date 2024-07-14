import React from 'react';
import './ItemDescription.css';
import { Link } from 'react-router-dom';

function Mixer() {
  return (
    <div className='book-spacing'>
        <div>
            <img className='product-img' src='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'/>
        </div>
        <div className='text'>
            <span className='title-text'>
            Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl
            </span><br/>
            <div className='author-space'>
            <span className='author'><span className='form-color'>Visit the Kenwood Store </span> </span><br/>
            </div>
            <span>🌟🌟🌟🌟</span> <span className='form-color'> 2,811 ratings</span>
            <hr/>
            <div className='bottom-text'>
               <div className='bottom-space'><span><b>About this item</b></span><br/></div>
               <div className='bottom-space'><span>STYLE AND RELIABILITY: For those that love baking, the Kenwood kMix stand mixer with stylish glass bowl offers a stylish blend of colour, retro design and classic Kenwood reliability</span><br/></div>
               <div className='bottom-space'><span>NON-STICK BAKING: A full set of non-stick baking tools including the K-beater, balloon whisk and the dough hook, making baking bread and mixing cake batter, easy and stress free</span><br/></div>
               <div className='bottom-space'><span> UNIQUE FOLD FUNCTION: Alongside the 5L glass mixing bowl is a 1000w motor, planetary mixing action for a good mix, unique fold function helps you create the most delicate mixes like brioche</span><br/></div>
               <div className='bottom-space'><span> OPTIONAL ATTACHMENTS: With over 10 optional attachments you can do more in the kitchen like pasta rolling and meat grinding, protect your kitchen sides with the supplied splash guard</span><br/></div>
               <div className='bottom-space'><span> EASY CLEAN UP: Mixer with baking tools are dishwasher safe for quick and easy cleaning</span><br/></div>
            </div>
        </div>
        <div>
            <form className='form'>
                <div className='price'><p className='price-size'> $239 </p></div>
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