import React from "react";
import "./Homes.css";
import Product from "../Product/Product";

function TheBooks() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            link="/book"
          />
          
          <Product
            id="7"
            title="Harry Potter and the Sorcerer's Stone (Harry Potter, Book 1) (MinaLima Edition)"
            price={22.79}
            rating={5}
            image="https://tse2.mm.bing.net/th?id=OIP.EIoM9kriGTmhRyJ98PSAngHaLH&pid=Api&P=0&h=220"
            link="/hBook"
          />
          
      
        </div>
     
      
      </div>
    </div>
  );
}

export default TheBooks;