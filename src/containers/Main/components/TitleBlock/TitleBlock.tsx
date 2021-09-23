import React from 'react';
import "./style.scss"

const TitleBlock = () => {
  return (
    <div className="title-block">
      <h1 className="main-title title-block__title">Hi, I am <span>Ruslan</span></h1>
      <p className="description title-block__description">Full Stack Developer</p>
      <a className="button-show title-block__button-show" href="/#experience" >SHOW EXPERIENCE</a>
    </div>
  );
};

export default TitleBlock;