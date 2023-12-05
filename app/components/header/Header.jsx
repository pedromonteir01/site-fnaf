'use client'
import React from "react";
import Styles from './header.module.css';
import { FaHome } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";

const SideHeader = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.subDiv1}>
        <div className={Styles.componentsHeader}>
          <div className={Styles.buttons}><button><FaHome /></button></div>
          <div className={Styles.buttons}><button><GiBearFace /></button></div>
          <div className={Styles.buttons}><button><FaPizzaSlice /></button></div>
          <div className={Styles.buttons}><button><FaPeopleGroup /></button></div>
        </div>
      </div>
      <div className={Styles.subDiv2}>
        </div>


    </div>
  )
}

export default SideHeader;