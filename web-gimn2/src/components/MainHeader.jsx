import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#1000DayOfworkOut</h4>
          <h1>Join the Legends of the Fitness world</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Atque voluptates eius debitis harum in optio minima illum
              accusamus corporis exercitationem?
          </p>
          <Link to="/plans"className='btn lg' >Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="HeaderImage" />
          </div>
        </div>

      </div>

    </header>
  )
}   

export default MainHeader