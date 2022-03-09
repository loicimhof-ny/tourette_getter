import './App.css';
import './speeder.css' ;
import staub from './star-removebg-preview.png';
import schlinux from './schlinux.png';
import React, { useState } from 'react';

function Level2() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <body id='background'>
      <div > Level 2</div>
      
        <div id="black_point"></div>
        
        


        <br/><br/><br/><br/><br/><br/>

        
        <div className="Schlinux-Container"><img src={schlinux} className="Schlinux" alt="logo" /></div>
        

        

    
    </body>
    </div>
  );
}

export default Level2;