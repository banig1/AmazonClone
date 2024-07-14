import React from 'react';
import './ItemDescription.css';
import { Link } from 'react-router-dom';

function Speaker() {
  return (
    <div className='book-spacing'>
        <div>
            <img className='product-img' src='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'/>
        </div>
        <div className='text'>
            <span className='title-text'>
            Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric
            </span><br/>
            <div className='author-space'>
            <span className='author'> <span className='form-color'>Brand: Amazon</span></span><br/>
            </div>
            <span>🌟🌟🌟🌟🌟</span> <span className='form-color'>101,934 ratings</span>
            <hr/>
            <div className='bottom-text'>
               <div className='bottom-space'><span><b>About this item</b></span><br/></div>
               <div className='bottom-space'><span>Meet Echo - Echo (3rd Gen) has new premium speakers powered by Dolby to play 360° audio with crisp vocals and dynamic bass response.</span><br/></div>
               <div className='bottom-space'><span>Voice control your music - Ask Alexa for a song, artist, or genre from Amazon Music, Apple Music, Spotify, Pandora, SiriusXM, and more. With multi-room music, play music on compatible Echo devices in different rooms.</span><br/></div>
               <div className='bottom-space'><span>Keep your family in sync - Use your Alexa devices like an intercom and talk to any room in the house with Drop In and Announcements.</span><br/></div>
               <div className='bottom-space'><span>Alexa has skills - With tens of thousands of skills and counting, Alexa is always getting smarter and adding new skills like tracking fitness, playing games, and more.</span><br/></div>
                <div className='bottom-space'><span>Designed to protect your privacy - Built with multiple layers of privacy controls, including a microphone off button that electronically disconnects the mics.</span><br/></div>
            </div>
        </div>
        <div>
            <form className='form'>
                <div className='price'><p className='price-size'> $98.99 </p></div>
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

export default Speaker;