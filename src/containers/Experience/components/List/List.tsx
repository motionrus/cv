import React from 'react';
import "./style.scss"


export const List: React.FC<{}> = ({
  children,
}) => (
  <div className="experience-list-cards">
    {children}
  </div>
);
