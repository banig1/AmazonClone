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
            id="2"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            link="/mixer"
          />
          <Product
            id="11"
            title="GoodCook Impact Fry Pan Set"
            price={39.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71ofEi1+UnL._AC_SX679_.jpg"
            link="/pan"
          />
        </div>
        <div className="home__row">
          <Product
            id="12"
            title="Homall Gaming Chair, Office Chair High Back Computer Chair Leather Desk Chair Racing Executive Ergonomic Adjustable Swivel Task Chair with Headrest and Lumbar Support (Red)"
            price={100.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/616z70pbY6L.jpg"
            link="/chair"
          />
        </div>
      </div>
    </div>
  );
}

export default Homes;