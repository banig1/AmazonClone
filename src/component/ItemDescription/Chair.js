import React from 'react';
import './ItemDescription.css';
import { Link } from 'react-router-dom';

function Chair() {
  return (
    <div className='book-spacing'>
        <div>
            <img className='product-img' src='https://images-na.ssl-images-amazon.com/images/I/616z70pbY6L.jpg'/>
        </div>
        <div className='text'>
            <span className='title-text'>
            Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric
            </span><br/>
            <div className='author-space'>
            <span className='author'> <span className='form-color'>Visit the Homall Store</span></span><br/>
            </div>
            <span>🌟🌟🌟🌟</span> <span className='form-color'>73,040 ratings</span>
            <hr/>
            <div className='bottom-text'>
               <div className='bottom-space'><span><b>About this item</b></span><br/></div>
               <div className='bottom-space'><span>Selected Material: High density shaping foam, more comfortable, elasticity resilience and service life. 1.8mm thick steel frame, more sturdy and stable. Pu Leather, skin friendly and wear resisting.</span><br/></div>
               <div className='bottom-space'><span>Multi Function: 360 degree swivel and multi direction wheels, load capacity: 300-pound maximum weight capacity. Recline function. Between 90 to 180 degree. Rocking function: chair can rock back and forth when you adjust the knob beneath the seat.</span><br/></div>
               <div className='bottom-space'><span>Dimension: Size of back: 22.5 inch and 30.5 inch. Size of seat: 14.5 inch and 20.5 inch. Seat adjustable height: 17.3 to 21.5 inch.</span><br/></div>
               <div className='bottom-space'><span>Wide Usage: This gaming chair is suitable for you to play computer games, watch show, do the work and have a rest. It will make your space more modern and elegant.</span><br/></div>
                <div className='bottom-space'><span>Included Components: Seat, backrest, base, wheels</span><br/></div>
            </div>
        </div>
        <div>
            <form className='form'>
                <div className='price'><p className='price-size'> $100.99 </p></div>
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

export default Chair;