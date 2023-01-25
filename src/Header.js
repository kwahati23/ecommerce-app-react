import React from 'react';
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

function Header (){
    return (
        <div className='header'>
            <div className="header__logo">
        <StorefrontIcon fontSize="large"/>
        <h2 className="header__logoTitle">EShop</h2>
      </div>
      <div className="header__search">

        <input type="text" className='header__searchInput' />
        <SearchIcon fontSize="medium" className="header__searchIcon "/>
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__item__lineOne">
            Hello, Guest
          </span>
          <span className="nav__item__lineTwo">
            Sign In
          </span>
        </div>
        <div className="nav__item">
        <span className="nav__item__lineOne">
            Your 
          </span>
          <span className="nav__item__lineTwo">
            Shop
          </span>
        </div>
        <div className="nav__item nav__basketCountItem">
        <span className="nav__item__lineOne">
            <ShoppingBasketIcon fontSize="small" className='itemBasket'/>
          </span>
          <span className="nav__item__lineTwo nav__basketCount">
            0
          </span>
        </div>
      </div>
        </div>
    )
}

export default Header
