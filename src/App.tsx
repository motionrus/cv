import React from 'react';
import './style.scss';
import {Main} from "./containers/Main/Main";
import Employment from "./containers/Employment/Employment";
import Experience from "./containers/Experience/Experience";
import Skills from "./containers/Skills/Skills";
import Courses from "./containers/Courses/Courses";

function App() {
  return (
    <div className="app">
      <Main/>
      <Employment />
      <Experience />
      <Skills />
      <Courses />
    </div>
  );
}

export default App;

