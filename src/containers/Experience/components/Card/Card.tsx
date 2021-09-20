import React, {useEffect, useRef, useState} from 'react';
import "./style.scss"
import {Line} from "../Line/Line";
import classnames from 'classnames';

interface IExperienceCard {
  title: string,
  description: string,
  workDate: string,
  logo: string,
  className?: string,
  duration?: string
}

export const CardDescription: React.FC<Pick<IExperienceCard, "title">> = ({
  title,
  children
}) => {
  return (
    <div className="experience-card-description">
      <h2 className="experience-card-description__main">{title}</h2>
      <ul className="experience-card-description__description">
        {children}
      </ul>
    </div>
  )
}


export const Card: React.FC<IExperienceCard> = ({
  logo,
  workDate,
  title,
  description,
  children,
  className,
  duration,
}) => {
  const cardRef = useRef<HTMLHeadingElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    let currentHeight = cardRef.current?.clientHeight || 0

    // first card child
    if (cardRef.current?.previousElementSibling === null) {
      currentHeight += 10
    }

    // middle card child
    if (cardRef.current?.nextElementSibling) {
      currentHeight -= 20
    }

    // last card child
    if (cardRef.current?.nextElementSibling?.nextElementSibling == null) {
      currentHeight += 20
    }


    setHeight(currentHeight + 2)
  }, [])

  return (
      <div className={classnames("experience-card", className)} ref={cardRef}>
        <Line height={height} />
        <div className="experience-card__logo experience-card-logo">
          <img className="experience-card-logo__icon" src={logo} alt=""/>
          <div>
            <p className="experience-card-logo__description">{workDate}</p>
            <p className="experience-card-logo__description">{duration}</p>
          </div>
        </div>
        <div className="experience-card__main">
          <div className="experience-card__title">{title}</div>
          <div className="experience-card__description">{description}</div>
          {children}
        </div>
      </div>
  );
};
