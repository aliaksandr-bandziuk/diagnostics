import React from 'react';

import './navbar.scss';

import burger from './burger-icon.png';
import logo from './logo.svg';

const Navbar = () => {
  return(
    <nav className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <div className="burger">
            <img src={burger} alt="" />
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="contacts">
            <div className="contacts__email">
              <p className="email__title">Пишите нам на email</p>
              <a className="email__adress" href="mailto:info@diagnistics.by">info@diagnistics.by</a>
            </div>
            <div className="contacts__tel">
              <p className="tel__title">Есть вопросы? Звоните!</p>
              <a className="tel__number" href="tel:+375294564545">+375 (29) 456-45-45</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;