import React from 'react';
import './ItemDescription.css';
import { Link } from 'react-router-dom';

function Nike() {
  return (
    <div className='book-spacing'>
        <div>
            <img className='product-img' src='https://i5.walmartimages.com/asr/e1752e08-54d0-4534-bed1-e83004015e1e_1.a60150b697bd016a87f01266b501145c.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff'/>
        </div>
        <div className='text'>
            <span className='title-text'>
            Nike Men's Pull Over Hoodie
            </span><br/>
            <div className='author-space'>
            <span className='author'> <span className='form-color'>Brand: Nike</span></span><br/>
            </div>
            <span>🌟🌟🌟🌟</span> <span className='form-color'>101 ratings</span>
            <hr/>
            <div className='bottom-text'>
               <div className='bottom-space'><span><b>About this item</b></span><br/></div>
               <div className='bottom-space'><span>NIKE HOODIE: Nike hoodies for men combine classic style with the soft comfort of fleece for an elevated look that you can wear everyday.</span><br/></div>
               <div className='bottom-space'><span>SOFT COMFORT: Nike sweatshirts for men are lined with a brushed-back fleece material that keeps you warm. The fleece feels soft against the skin during wear.</span><br/></div>
               <div className='bottom-space'><span>ADJUSTABLE COVERAGE: The men's hoodies contain a drawstring rim that offers adjustable coverage. Customize your fit to be loose during relaxation or fitted during play.</span><br/></div>
               <div className='bottom-space'><span>KANGAROO POCKET: Large kangaroo pocket on the front side of the hoodie can keep hands warm or store small items during movement.</span><br/></div>
               <div className='bottom-space'><span>LOOSE FIT: The Nike hoodie lays loosely against the body for a relaxed fit. The ribbed hem and cuffs allow the men's sweatshirt to feel secure while maintaining comfort.</span><br/></div>
            </div>
        </div>
        <div>
            <form className='form'>
                <div className='price'><p className='price-size'> $61.57 </p></div>
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

export default Nike;