import React from 'react';
import './Footer.css'
import BackToTopButton from './BackToTopButton';

function Footer() {
  return (
    <div className='pur'>
       <BackToTopButton />
    <div className='outerDiv'>
        {/* <div className="firstDiv">
        <button className='g-btn'>
        <h6 className='g'> <i className="bi bi-google"></i></h6>
        </button>
        <div className='space'></div>
        
          <button className='img-btn'>
                 <p className='can-btn'><img className='canada'src='data:image/png;base64,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' alt="" height="15" width="25"></img>Canada </p>
          </button>
        </div> */}
        <div className="secondDiv">
            
            <div className='spaces'>
            <h6 className='text-uppercase fw-bold mb-4'>Get to Know Us</h6>
              <p>
                <a href='#!' className='text-reset'>
                Careers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Amazon Newsletter
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                About Amazon
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Accessibility
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Sustainability
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Amazon Devices
                </a>
              </p>
            </div>
            <div className='spaces'>
            <h6 className='text-uppercase fw-bold mb-4'>Make Money with Us</h6>
              <p>
                <a href='#!' className='text-reset'>
                Sell more with Amazon
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Sell apps on Amazon
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Supply to Amazon
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Protect & Build Your Brand
                </a>
              </p>
            </div>
            <div className='spaces'>
            <h6 className='text-uppercase fw-bold mb-4'>Amazon Payment Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                Amazon Visa
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Amazon Store Card
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Amazon Secured Card
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Amazon Business Card
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Shop with Points
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Credit Card Marketplace
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Reload Your Balance
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Gift Cards
                </a>
              </p>
            </div>
            <div className='spaces'>
            <h6 className='text-uppercase fw-bold mb-4'>Let Us Help You</h6>
              <p>
                <a href='#!' className='text-reset'>
                Your Account
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Your Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Shipping Rates & Policies
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Amazon Prime
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Returns & Replacements
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Manage Your Content and Devices
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Your Recalls and Product Safety Alerts
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Help
                </a>
                </p>
               

         
            </div>
            
        </div>
        
    </div>
    {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'></section>   */}
    <div className='line'/>
    <div className='bottom-footer'>
    <div className='outer'>
        <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className='footer-img'/> 
        <div className='space'></div>
        
          <button className='img-btn'>
                 <p className='can-btn'><img className='canada'src='https://etc.usf.edu/clipart/72500/72536/72536_50_us_c_lg.gif' alt="" height="15" width="25"></img>United States </p>
          </button>
        
         
    </div>
    </div>
      
        </div>

    
  );
}

export default Footer;
