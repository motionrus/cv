import React from 'react';
import './style.scss';
import {Main} from "./containers/Main/Main";
import Experience from "./containers/Experience/Experience";

function App() {
  return (
    <div className="app">
      <Main/>
      <Experience />
    </div>
  );
}

export default App;
