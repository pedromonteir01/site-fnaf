'use client'
import React from "react";
import Styles from './headerMobile.module.css';
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";

const HeaderMobile = () => {
    return (
      <div className={Styles.container}>
          <div className={Styles.componentsHeader}>
            <div className={Styles.buttons}><a href="/"><button><FaHome /></button></a></div>
            <div className={Styles.buttons}><a href="../page-animatronic"><button><GiBearFace /></button></a></div>
            <div className={Styles.buttons}><a href="../page-pizzerias"><button><FaPizzaSlice /></button></a></div>
            <div className={Styles.buttons}><a href="../page-students"><button><FaPeopleGroup /></button></a></div>
          </div>
      </div>
    )
  }
  
  export default HeaderMobile;