import React from 'react';
import "./style.scss"

const TitleBlock = () => {
  return (
    <div className="title-block">
      <h1 className="title title-block__title">Hi, I am <span>Ruslan</span></h1>
      <p className="description title-block__description">Full Stack Developer</p>
      <button className="button-show title-block__button-show">SHOW EXPERIENCE</button>
    </div>
  );
};

export default TitleBlock;