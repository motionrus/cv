import React from 'react';
import "./style.scss"
import logo from "./img/logo.jpg"
import Menu from 'components/Menu/Menu';

const Header = () => {

  return (
    <header className="header app__header width-limit-container">
      <img className="header__logo" src={logo} alt=""/>
      <div className="header__title">
        motion
        <span className="header__rus">rus</span>
      </div>
      <Menu className="header__menu"/>
    </header>
  );
};

export default Header;