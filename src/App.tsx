import React from 'react';
import './style.scss';
import {Main} from "./containers/Main/Main";
import Employment from "./containers/Employment/Employment";
import Experience from "./containers/Experience/Experience";
import Skills from "./containers/Skills/Skills";

function App() {
  return (
    <div className="app">
      <Main/>
      <Employment />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;

