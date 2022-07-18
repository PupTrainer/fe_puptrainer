import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Nav.css";
import logoImage from "./images/PupTrainerLogo.png"

const Nav = ({ setUser, setUsername, setEmail }) => {

    const clearLogin = () => {
        setUser('')
        setUsername('')
        setEmail('')
    }

    return (
        <div className="nav-container">
          <img src={logoImage} alt="puptrainer Logo" />
          <div className='links'>
              <NavLink className= "nav-button" to='/homepage'>User Profile</NavLink>
              <NavLink className= "nav-button" to='/About'>About</NavLink>
              <NavLink className= "nav-button" to='/' onClick={() => clearLogin()}>Logout</NavLink>
          </div>
        </div>
    )
}

export default Nav;
