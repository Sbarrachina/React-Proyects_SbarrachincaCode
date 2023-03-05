import React, { useState } from "react";
import css from "./Header.module.css";
import Logo from '../../assets/logo.png'
import {CgShoppingBag } from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'


const Header = () => {
const [ShowMenu, setShowMenu] = useState (true)

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>Beauty</span>
        </div>

      <div className={css.right}>

        <div className={css.bars}>
          <GoThreeBars/>
        </div>


        <div className={css.menu}>
            <ul className={css.menu}>
                <li>Collections</li>
                <li>Brands</li>
                <li>New</li>
                <li>Sales</li>
                <li>ENG</li>
                </ul> 

        </div>
        <input type="text" className={css.search}  placeholder="Search"/>

        <CgShoppingBag className={css.cart}/>
      </div>
    </div>
  );
};

export default Header;
