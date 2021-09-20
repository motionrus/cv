import React from 'react';
import "./style.scss"
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"


const Employment = () => {
  return (
    <section className="employment">
      <div className="width-limit-container">
        <p className="employment__description">Desired position and salary</p>
        <h1 className="employment__title title">Full Stack Developer</h1>
        <ul className="common-list employment__list">
          <li>Sofware Development</li>
          <li>Telecommunications</li>
        </ul>
      </div>
      <div className="employment-card-list">
        <div className="employment-card employment__card">
          <img className="employment-card__img" src={img1} alt=""/>
          <p className="employment-card__description">Location</p>
          <p className="employment-card__title">Remotely</p>
        </div>
        <div className="employment-card employment__card">
          <img className="employment-card__img" src={img2} alt=""/>
          <p className="employment-card__description">Employment</p>
          <p className="employment-card__title">Full Time</p>
        </div>
        <div className="employment-card employment__card">
          <img className="employment-card__img" src={img3} alt=""/>
          <p className="employment-card__description">Schedule</p>
          <p className="employment-card__title">Full Day</p>
        </div>
      </div>
    </section>
  );
};

export default Employment;