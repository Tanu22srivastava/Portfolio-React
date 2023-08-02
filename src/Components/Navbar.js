import React, { useState } from 'react';
import './App.css';


function Navbar() {
  const [menuIconClass, setMenuIconClass] = useState('bx bx-menu');
  const [navbarClass, setNavbarClass] = useState('navbar');
  

  const handleMenuIconClick = () => {
    setMenuIconClass((prevClass) =>
      prevClass.includes('bx-x') ? 'bx bx-menu' : 'bx bx-menu bx-x'
    );

    setNavbarClass((prevClass) =>
      prevClass.includes('active') ? 'navbar' : 'navbar active'
    );

    
  };

  return (
    <header className="header" id='myTopnav'>
      <a href="#" className='logo'>Tanushree Srivastava</a>
      <div className={`menu-icon ${menuIconClass}`} onClick={handleMenuIconClick} />

      <nav className={navbarClass}>
        <a className="tags" href="/">Home</a>
        <a className="tags" href="">About</a>
        <a className="tags" href="#">Projects</a>
        <a className="tags" href="#">Services</a>
        <a className="tags" href="#">Contact</a>
      </nav>
      
    </header>
    
    
  );
}

export default Navbar;
