import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";

function HeaderBottom() {
  return (
    <div className='b-nav'>
        <Link to='/theBooks' className='lines'>
        <div className='nav-navOptions'>Books</div>
        </Link>
        <Link to='/homes' className='lines'>
        <div className='nav-navOptions'>Home</div>
        </Link>
        <Link to='/tech' className='lines'>
        <div className='nav-navOptions'>Tech</div>
        </Link>
        <Link to='/clothes' className='lines'>
        <div className='nav-navOptions'>Clothes</div>
        </Link>
    </div>
  )
}

export default HeaderBottom