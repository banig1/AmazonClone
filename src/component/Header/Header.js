import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { BsSearch } from "react-icons/bs";
import { IoBasketSharp } from "react-icons/io5";
import {BsPersonFill} from "react-icons/bs"
import {BsClipboard2} from "react-icons/bs"
import Dark from "../Login/DarkMode";

function Header() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <BsSearch className="header__searchIcon"/>
      </div>

      <div className="header__nav">
        <Link to={'/login'}>
          <div className="header__optionBasket">
            {/* <span className="header__optionLineOne">Hello Guest</span> */}
            <BsPersonFill className="header__LoginCount"/>
            <span className="header__optionLineTwo">Sign In</span>
          
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__optionBasket">
            {/* <span className="header__optionLineOne">Returns</span> */}
            <BsClipboard2 className="header__LoginCount"/>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>
        

        {/* <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div> */}

        <Link to="/cart">
          <div className="header__optionBasket">
         
            <IoBasketSharp className="header__LoginCount basket"/>
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>

        {/* <Dark/> */}
      </div>
    </div>
  );
}

export default Header;