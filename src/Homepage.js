import React from 'react'
import Info from './Info'
import Form from './Form'
import './Homepage.css'
import { Link } from 'react-router-dom'


const Homepage = ({ user, registerDog, setDogId, dataUser}) => {
    if(dataUser) {
        return (
            <div className='homepage-container'>
                <Info user={user} setDogId={setDogId}/>
                <Form user={user} registerDog={registerDog}/>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Invalid User...Please click <Link to='/'>here</Link> to return to the login page to create a user</h2>
            </div>
        )
    }
}

export default Homepage;
