import React from 'react';
import {Link} from "react-router-dom";
import cl from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={cl.navbar}>
        <span className={cl.navbar_items}><Link to="/" className={cl.navbar_a}>Домой</Link></span>
        <span className={cl.navbar_items}><Link to="/about" className={cl.navbar_a}>О сайте</Link></span>
        <span className={cl.navbar_items}><Link to="/posts" className={cl.navbar_a}>Посты</Link></span>
    </div>
  );
};

export default Navbar;