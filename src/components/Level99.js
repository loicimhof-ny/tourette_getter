import './App.css';
import './speeder.css' ;
import staub from './star-removebg-preview.png';
import schlinux from './schlinux.png';
import React, { useState } from 'react';

function Level99() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <body id='background'>
      <h1> This Brick likes Donnstig</h1>
      <a
          className="App-link"
          href="http://10.43.2.6:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Word
        </a>
        <p>
          The Brick does Schneesport
        </p>

        {
          [...Array(3)].map((x, i)=>(<div key={i} className="Ricky-Container"><img src={staub} className="Ricky" alt="logo" /></div>))
        }
        
        <div className="Ricky-Container"><img src={staub} className="Ricky" alt="logo" /></div>

        <div classname="Random-Container">
            <p id='dinimom'>
              dini muetter
            </p>
        </div>

        <br/>
        <p>
          This is a birb
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          birb mf
        </a>
        <div className="Schlinux-Container"><img src={schlinux} className="Schlinux" alt="logo" /></div>
        

        <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>

        

        <div id="controls">
          <label for="tx"><span>0 </span>background speed <span>100</span></label>
          <input type="range" id="tx" min="0" max="80" value="0" />

          <label for="scale"><span>0 </span>mf speed <span>2</span></label>
          <input type="range" id="scale" min="0" max="2" step=".05" value="1"/>
        </div>

        </body>
    </div>
  );
}

export default Level99;