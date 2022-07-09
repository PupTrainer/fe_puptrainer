import React from 'react'
import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Login'>Logout</NavLink>
        </div>
    )
}

export default Nav