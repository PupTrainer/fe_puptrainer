import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Nav.css";
import logoImage from "./images/PupTrainerLogo.png"
const Nav = () => {
    return (
        <div className="nav-container">
          <img src={logoImage} alt="puptrainer Logo" />
          <div className='links'>
              <NavLink className= "nav-button" to='/homepage'>User Profile</NavLink>
              <NavLink className= "nav-button" to='/About'>About</NavLink>
              <NavLink className= "nav-button" to='/'>Logout</NavLink>
          </div>
        </div>
    )
}

export default Nav
