import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './navbar.css'
import Logo from '../images/logo.png'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'

const Navbar = () => {
  return (
    <nav>
    <div className='container nav__container'>
        <Link to="/" className='logo'>
            <img src={Logo} alt="Nav logo" />
        </Link>
        <ul className='nav__links'>
            {
            links.map(({name, path},index) => {
                return(
                    <li>
                      <NavLink to={path} className={({isActive}) => isActive ? 'active-nav':
                    '' }>{name}</NavLink>      
                    </li>
                )

            })
        }
        </ul>
        <button className='nav--toggle-btn'>
        <GoThreeBars/>
        </button>


 </div>
 </nav>
  )
}

export default Navbar