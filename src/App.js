import React from 'react';
import Tekin from "./Tekin";
import './App.css';


function App(props) {
  return (
      <div>
        <div>
          {props.tekin.name} - {props.tekin.age}
        </div>
        <br />
        <br />
        <div>
          <Tekin incrementAge={props.incrementAge} />
        </div>
      </div>
  );
}

export default App;
