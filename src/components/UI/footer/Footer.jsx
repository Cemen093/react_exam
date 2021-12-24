import React from 'react';
import {Link} from "react-router-dom";
import cl from "./footer.module.css"

const Footer = () => {
  return (
    <div className={cl.footer}>
      <div className={cl.footer_content}>
        <div className={cl.footer_items}><Link to="/" className={cl.footer_a}>Домой</Link></div>
        <div className={cl.footer_items}><Link to="/about" className={cl.footer_a}>О сайте</Link></div>
        <div className={cl.footer_items}><Link to="/posts" className={cl.footer_a}>Посты</Link></div>
      </div>
      <span>© 2021 Вася из Шага, Inc</span>
    </div>
  );
};

export default Footer;