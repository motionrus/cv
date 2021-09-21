import React from 'react';
import "./style.scss"
import githubIcon from "./icons/github.svg"
import instagramIcon from "./icons/instagram.svg"
import telegramIcon from "./icons/telegram.svg"
import moreIcon from "./icons/more.svg"

const BottomBlock = () => {

  return (
    <React.Fragment>
      <a className="main-bottom-block pulse" href="/#employment"><img src={moreIcon} alt=""/></a>
      <div className="main-bottom-block-right">
        <a href="https://github.com/motionrus" target="_blank"><img src={githubIcon} alt=""/></a>
        <a href="https://t.me/motionrus" target="_blank"><img src={telegramIcon} alt=""/></a>
        <a href="https://www.instagram.com/motionrus/" target="_blank"><img src={instagramIcon} alt=""/></a>
      </div>
    </React.Fragment>
  );
};

export default BottomBlock;