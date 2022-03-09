import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Level from './components/Level';
import Level1 from './components/Level1';
import Level2 from './components/Level2';
import Level3 from './components/Level3';
import Level99 from './components/Level99';
import Good_pages from './components/Good_pages';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div id='nobackground'>
          <Navigation />
            <Routes>
             <Route path="/" element={<Home/>} exact id='mami'/>
             <Route path="/about" element={<About/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/level" element={<Level/>}/>
             <Route path="/level/1" element={<Level1/>}/>
             <Route path="/level/2" element={<Level2/>}/>
             <Route path="/level/3" element={<Level3/>}/>
             <Route path="/level/99" element={<Level99/>}/>
             <Route path="/good_pages" element={<Good_pages/>}/>
            <Route path="/*" element={<Error/>}/>
           </Routes>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;