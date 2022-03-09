import './App.css';
import './speeder.css' ;
import staub from './star-removebg-preview.png';
import schlinux from './schlinux.png';
import React, { useState } from 'react';

function Good_pages() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <body>
      

        <h1> uuööö:</h1>
        
 
        <div className="Schlinux-Container"><img src={schlinux} className="Schlinux" alt="logo" /></div>
        

        <a
          className="App-link"
          href="http://10.43.2.6:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ziegel Stone
        </a>

        <a
          className="App-link"
          href="http://10.43.2.9:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mocky
        </a>

        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Word
        </a>
        <a
          className="App-link"
          href="https://weshouldnotgotogibb.ch"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schön
        </a>


        </body>
    </div>
  );
}

export default Good_pages;