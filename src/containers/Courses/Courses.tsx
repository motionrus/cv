import React from 'react';
import "./style.scss"
import logo1 from "./img/1.png"
import logo2 from "./img/2.png"
import logo3 from "./img/3.png"

interface ICoursesCard {
  logo: string,
  description: string[],
}

const CoursesCard: React.FC<ICoursesCard> = ({logo, description}) => (
  <div className="courses-card">
    <div className="courses-card__part-background"/>
    <img className="courses-card__logo" src={logo} alt=""/>
    <div className="courses-card__description">
      <div className="courses-card__p1">{description[0]}</div>
      <div className="courses-card__p2">{description[1]}</div>
      <div className="courses-card__p3">{description[2]}</div>
      <div className="courses-card__p4">{description[3]}</div>
      <div className="courses-card__p4">{description[4]}</div>
      <div className="courses-card__p4">{description[5]}</div>
    </div>
  </div>
)

const myCards = [{
  logo: logo1,
  description: ["learn.python.ru", "Python", "10 february - 10 may 2018", "Mentor", "Mikhail", "Karniev"]
}, {
  logo: logo2,
  description: ["learn.javascript.ru", "Node.js", "21 march - 21 may 2020", "Mentor", "Anton", "Griadchenko",]
}, {
  logo: logo3,
  description: ["www.learn.javascript.ru", "React.js", "14 march - 14 may 2021", "Mentor", "Anton", "Griadchenko",]
}]

const Courses = () => {
  return (
    <div className="courses">
      <div className="courses__list">
        {myCards.map((card, index) => <CoursesCard {...card} key={index}/>)}
      </div>
    </div>
  );
};

export default Courses;