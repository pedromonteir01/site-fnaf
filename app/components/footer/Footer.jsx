"use client"
import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Styles from './footer.module.css';

const Footer = () => {

  return (
    <footer className={Styles.footerStyle}>
      <p>2023
        Five Nights at Freddy's
        © Todos os direitos reservados.</p>
        <div id={Styles.icons}>
      <div><FaInstagram /></div>
      <div><FaFacebook /></div>
      <div><FaXTwitter /></div>
      <div><IoLogoYoutube /></div>
      <div><FaGithub /></div>
      </div>
    </footer>
  );
}

export default Footer; 
