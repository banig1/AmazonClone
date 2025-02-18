import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
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
            id="2"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            link="/mixer"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Fitbit Charge 4 Black Advanced Fitness Tracker"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            link="/watch"
          />
          <Product
            id="4"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            link="/speaker"
          />
          <Product
            id="5"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            link="/ipad"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            link="/screen"
          />
        </div>
        <div className="home__row">
          <Product
            id="7"
            title="Harry Potter and the Sorcerer's Stone (Harry Potter, Book 1) (MinaLima Edition)"
            price={22.79}
            rating={5}
            image="https://tse2.mm.bing.net/th?id=OIP.EIoM9kriGTmhRyJ98PSAngHaLH&pid=Api&P=0&h=220"
            link="/hBook"
          />
          
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

export default Home;
