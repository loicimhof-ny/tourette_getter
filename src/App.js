import logo from './logo.svg';
import './App.css';
import './speeder.css' ;
import staub from './star-removebg-preview.png';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> This Brick likes Donnstig</h1>
        <p>
          The Brick does Schneesport
        </p>
        <div className="Ricky-Container"><img src={staub} className="Ricky" alt="logo" /></div>
        
        <br/><br/>
        
        <p>
          This is a birb
        </p>
        <a
          className="App-link"
          href="https://www.notion.so/uu-bb325c1776934e3a8a6f8a0d1733421d"
          target="_blank"
          rel="noopener noreferrer"
        >
          this
        </a>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          birb mf
        </a>
        
  

  
        <div class="mover"></div>
        <div class="mover"></div>

        <div id="controls">
          <label for="tx"><span>0 </span>background speed <span>80</span></label>
          <input type="range" id="tx" min="0" max="80" value="0" />

          <label for="scale"><span>0 </span>mf speed <span>2</span></label>
          <input type="range" id="scale" min="0" max="2" step=".05" value="1"/>
        </div>



  

      </header>
    </div>
  );
}

export default App;

/*


function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

*/