import Header from "containers/Main/components/Header/Header";
import React from "react";
import "./style.scss"
import TitleBlock from "./components/TitleBlock/TitleBlock";
import BottomBlock from "./components/BottomBlock/BottomBlock";

export const Main: React.FC<{}> = () => {

  return (
    <div className="background" id="home">
    <div className="main width-limit-container">
      <Header/>
      <TitleBlock />
      <BottomBlock />
    </div>
    </div>
  );
};