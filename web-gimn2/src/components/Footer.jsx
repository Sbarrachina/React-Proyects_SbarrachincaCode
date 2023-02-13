import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo" /> 
                    </Link>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing
                         elit. Laborum asperiores officiis dignissimos soluta ab atque enim autem nulla rem architecto.</p>
                    </article>
        </div>
    </footer>
  )
}

export default Footer