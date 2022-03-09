import './App.css';
import './speeder.css' ;
import staub from './star-removebg-preview.png';
import schlinux from './schlinux.png';
import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <body >



        
        

        
      <h1>Are you Ready?</h1>
        
 
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          birb mf
        </a>
        <div className="Schlinux-Container"><img src={schlinux} className="Schlinux" alt="logo" /></div>
        

        


        </body>
    </div>
  );
}

export default Home;