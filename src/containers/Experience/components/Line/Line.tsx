import React from "react";
import "./style.scss"

interface ILine {
  height: number,
}

export const Line: React.FC<ILine> = ({height}) => {
  return (
    <div className="card-line">
      <svg width="64" height={height} viewBox={`0 0 64 ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={`M64 2L2 2L2 ${height - 2}H64`} stroke="#CFEAF4" strokeWidth="4" strokeLinejoin="bevel"
              strokeDasharray="16 8"/>
      </svg>
    </div>
  );
};
