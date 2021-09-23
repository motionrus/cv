import React from 'react';
import "./style.scss";
import firstIcon from "./img/1.svg"
import secondIcon from "./img/2.svg"
import githubIcon from "../Main/components/BottomBlock/icons/github.svg";
import telegramIcon from "../Main/components/BottomBlock/icons/telegram.svg";
import instagramIcon from "../Main/components/BottomBlock/icons/instagram.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="width-limit-container">
        <h1 className="title">About me</h1>
      </div>
      <div className="about__list">
        <div className="about__card">
          <img src={firstIcon} alt=""/>
          <div className="about__title">Books</div>
          <ul>
            <li>Dive Into DESIGN PATTERNS, Shvets</li>
            <li>Clean Code by Robert Martin</li>
            <li>Learning Python by Mark Lutz</li>
          </ul>
        </div>
        <div className="about__card">
          <img src={secondIcon} alt=""/>
          <div className="about__title">Hobbies</div>
          <ul>
            <li>Python, TypesScript, JavaScript</li>
            <li>OpenShift, SQL, Linux</li>
            <li>DevOps, MLOps, SRE</li>
          </ul>
        </div>
      </div>
      <ul className="header-menu_flex">
        <li className="menu-item menu-item_black hover-underline-animation"><a href="/#home">Home</a></li>
        <li className="menu-item menu-item_black hover-underline-animation"><a href="/#experience">Experience</a></li>
        <li className="menu-item menu-item_black hover-underline-animation"><a href="/#skills">Skills</a></li>
        <li className="menu-item menu-item_black hover-underline-animation"><a href="/#courses">Courses</a></li>
        <li className="menu-item menu-item_black hover-underline-animation"><a href="/#about">About</a></li>
      </ul>
      <div className="bottom-page-background">
        <div className="bottom-page width-limit-container">
          <a href="/#home" className="logo-title normal-weight">motion<span>rus</span></a>
          <p className="copyright">© 2021 Copyright.</p>
          <div className="bottom-page__flex-right">
            <a target="_blank" href="https://github.com/motionrus"><img src={githubIcon} alt=""/></a>
            <a target="_blank" href="https://t.me/motionrus"><img src={telegramIcon} alt=""/></a>
            <a target="_blank" href="https://www.instagram.com/motionrus/"><img src={instagramIcon} alt=""/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;