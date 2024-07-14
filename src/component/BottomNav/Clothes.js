import React from "react";
import "./Homes.css";
import Product from "../Product/Product";

function Homes() {
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
            id="8"
            title="Nike Men's Pull Over Hoodie"
            price={61.57}
            rating={4}
            image="https://i5.walmartimages.com/asr/e1752e08-54d0-4534-bed1-e83004015e1e_1.a60150b697bd016a87f01266b501145c.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
            link="/nike"
          />
        </div>
        <div className="home__row">
          <Product
            id="9"
            title="Adidas Men's Athletic Cushioned Crew Socks with Arch Compression for a Secure Fit (6-Pair)"
            price={11.99}
            rating={4}
            image="https://tse1.mm.bing.net/th?id=OIP.0yxfXZ0Wb3dbqdrsy6IQxwHaIu&pid=Api&P=0&h=220"
            link="/socks"
          />
          <Product
            id="10"
            title="Converse Women's All Star '70s High Top Sneakers"
            price={66.04}
            rating={3}
            image="http://www.zappos.com/images/z/2/5/4/3/7/5/2543755-5-4x.jpg"
            link="/shoe"
          />
          </div>
      </div>
    </div>
  );
}

export default Homes;