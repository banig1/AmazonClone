import React from 'react';
import './ItemDescription.css';
import { Link } from 'react-router-dom';

function Book() {
  return (
    <div className='book-spacing'>
        <div>
            <img className='product-img' src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'/>
        </div>
        <div className='text'>
            <span className='title-text'>
                The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback
            </span><br/>
            <div className='author-space'>
            <span className='author'>by <span className='form-color'>Eric Ries</span> (Author)</span><br/>
            </div>
            <span>🌟🌟🌟🌟🌟</span> <span className='form-color'>16,032 ratings</span>
            <hr/>
            <div className='bottom-text'>
               <div className='bottom-space'><span><b>Most startups fail. But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched.</b></span><br/></div>
               <div className='bottom-space'><span>Eric Ries defines a startup as an organization dedicated to creating something new under conditions of extreme uncertainty. This is just as true for one person in a garage or a group of seasoned professionals in a Fortune 500 boardroom. What they have in common is a mission to penetrate that fog of uncertainty to discover a successful path to a sustainable business.</span><br/></div>
               <div className='bottom-space'><span>The Lean Startup approach fosters companies that are both more capital efficient and that leverage human creativity more effectively. Inspired by lessons from lean manufacturing, it relies on “validated learning,” rapid scientific experimentation, as well as a number of counter-intuitive practices that shorten product development cycles, measure actual progress without resorting to vanity metrics, and learn what customers really want. It enables a company to shift directions with agility, altering plans inch by inch, minute by minute.</span><br/></div>
               <div className='bottom-space'><span>Rather than wasting time creating elaborate business plans, The Lean Startup offers entrepreneurs—in companies of all sizes—a way to test their vision continuously, to adapt and adjust before it’s too late. Ries provides a scientific approach to creating and managing successful startups in a age when companies need to innovate more than ever.</span><br/></div>
            </div>
        </div>
        <div>
            <form className='form'>
                <div className='price'><p className='price-size'> $11.96 </p></div>
                    <div>
                        <div className='form-space'>
                            <span>Get <b>Fast, Free Shipping</b> with</span><br/>
                            <span className='form-color'>Amazon Prime</span><br/>
                            <span className='form-color'>FREE Returns </span><br/>
                        </div>
                           <span><span className='form-color'>FREE delivery</span>, shipped by Amazon over $35</span><br/>
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

export default Book