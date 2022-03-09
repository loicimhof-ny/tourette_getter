import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/good_pages">Good Pages</NavLink>
          <NavLink to="/level">Levels</NavLink>
       </div>
    );
}
 
export default Navigation;