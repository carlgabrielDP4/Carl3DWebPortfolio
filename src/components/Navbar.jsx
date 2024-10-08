import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import logo from '../assets/logo.png'; //i updated to my own logo
import { menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
  <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link to="/">
        <div
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold curser-pointer">Carl Dela Pena<span className="sm:block hidden"> | React.JS Experiment</span></p>
        </div>
      </Link>
      <ul className="list-none hidden sm:flex flex-row gap-10">
        {navLinks.map((link) => (
          <li key={link.id} className={`${ active === link.title ? "text-white" : "text-secondary"} hover:text-white text-{19px} font-medium cursor-pointer`} >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
        
        ))}
      </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src= {toggle ? close: menu} alt="logo" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=> setToggle(!toggle)} />
          </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
