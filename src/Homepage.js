import React from 'react'
import Info from './Info'
import Form from './Form'
import './Homepage.css'

const Homepage = ({ user, registerDog }) => {
    return (
        <div className='homepage-container'>
            <Info user={user}/>
            <Form user={user} registerDog={registerDog}/>
        </div>
    )
}

export default Homepage;
