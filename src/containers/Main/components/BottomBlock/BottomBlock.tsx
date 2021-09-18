import React from 'react';
import "./style.scss"
import githubIcon from "./icons/github.svg"
import instagramIcon from "./icons/instagram.svg"
import telegramIcon from "./icons/telegram.svg"
import moreIcon from "./icons/more.svg"

const BottomBlock = () => {
  return (
    <React.Fragment>
      <a className="main-bottom-block" href="#"><img src={moreIcon} alt=""/></a>
      <div className="main-bottom-block-right">
        <a href="#"><img src={githubIcon} alt=""/></a>
        <a href="#"><img src={telegramIcon} alt=""/></a>
        <a href="#"><img src={instagramIcon} alt=""/></a>
      </div>
    </React.Fragment>
  );
};

export default BottomBlock;