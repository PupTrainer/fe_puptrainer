import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Nav.css";
const Nav = () => {
    return (
        <div className='links'>
            <NavLink to='/User'>User Profile</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Login'>Logout</NavLink>
        </div>
    )
}

export default Nav
