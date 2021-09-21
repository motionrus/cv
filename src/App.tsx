import React from 'react';
import './style.scss';
import {Main} from "./containers/Main/Main";
import Employment from "./containers/Employment/Employment";
import Experience from "./containers/Experience/Experience";
import Skills from "./containers/Skills/Skills";
import Courses from "./containers/Courses/Courses";
import About from "./containers/About/About";

function App() {
  return (
    <div className="app">
      <Main/>
      <Employment />
      <Experience />
      <Skills />
      <Courses />
      <About />
    </div>
  );
}

export default App;

