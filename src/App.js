import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
// import Login from "./component/Login/Login";
import Cart from "./component/Cart/Cart";
import Checkout from "./component/Checkout/Checkout";
import Book from "./component/ItemDescription/Book";
import Mixer from './component/ItemDescription/Mixer';
import Watch from './component/ItemDescription/Watch';
import Speaker from './component/ItemDescription/Speaker';
import Ipad from './component/ItemDescription/Ipad';
import Screen from './component/ItemDescription/Screen';
import LoginOpen from "./component/Login/LoginOpen";
import Orders from "./component/Orders/Orders";
import HBook from "./component/ItemDescription/hBook";
import Nike from "./component/ItemDescription/Nike";
import Socks from "./component/ItemDescription/Socks";
import Shoe from "./component/ItemDescription/Shoe";
import Pan from "./component/ItemDescription/Pan";
import Chair from "./component/ItemDescription/Chair";
import HeaderBottom from "./component/Header/HeaderBottom";
import Homes from "./component/BottomNav/Homes";
import TheBooks from "./component/BottomNav/TheBooks";
import Tech from "./component/BottomNav/Tech";
import Clothes from "./component/BottomNav/Clothes";
import Footer from "./component/Footer/Footer";
import Dark from "./component/Login/DarkMode";
function App() {

    return (

   
    <Router>

      <div className="App" >
        <Routes>
          <Route path="/" element={[ <Header/>,<HeaderBottom/>, <Home />, <Footer />]} />
          <Route path="/cart" element={[<Header/>,<Cart />, <Footer />]} />
          <Route path="/orders" element={[<Header/>,<Orders />, <Footer />]} />
          <Route path="/login" element={<Dark />} />
          <Route path="/checkout" element={[<Header/>,<Checkout />, <Footer />]} />
          <Route path="/homes" element={[ <Header/>,<HeaderBottom/>, <Homes />, <Footer />]} />
          <Route path="/theBooks" element={[ <Header/>,<HeaderBottom/>, <TheBooks />, <Footer />]} />
          <Route path="/tech" element={[ <Header/>,<HeaderBottom/>, <Tech />, <Footer />]} />
          <Route path="/clothes" element={[ <Header/>,<HeaderBottom/>, <Clothes />, <Footer />]} />
          <Route path="/book" element={[<Header/>,<Book />, <Footer />]} />
          <Route path="/mixer" element={[<Header/>,<Mixer />, <Footer />]} />
          <Route path="/watch" element={[<Header/>,<Watch />, <Footer />]} />
          <Route path="/speaker" element={[<Header/>,<Speaker />, <Footer />]} />
          <Route path="/ipad" element={[<Header/>,<Ipad />, <Footer />]} />
          <Route path="/screen" element={[<Header/>,<Screen />, <Footer />]} />
          <Route path="/hBook" element={[<Header/>,<HBook /> , <Footer />]} />
          <Route path="/nike" element={[<Header/>,<Nike /> , <Footer />]} />
          <Route path="/socks" element={[<Header/>,<Socks />, <Footer />]} />
          <Route path="/shoe" element={[<Header/>,<Shoe />, <Footer />]} />
          <Route path="/pan" element={[<Header/>,<Pan />, <Footer />]} />
          <Route path="/chair" element={[<Header/>,<Chair />, <Footer />]} />
          <Route path="/open" element={[<LoginOpen/>]} />
        </Routes>
      </div>
    </Router>
    );
  }
  


export default App;

