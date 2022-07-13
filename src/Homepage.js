import React from 'react'
import Info from './Info'
import Form from './Form'
import './Homepage.css'

const Homepage = ({ user }) => {
    return (
        <div className='homepage-container'>
            <Info user={user}/>
            <Form />
        </div>
    )
}

export default Homepage
