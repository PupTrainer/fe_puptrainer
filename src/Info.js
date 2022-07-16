import React from 'react'
import './Info.css'
import { Link } from 'react-router-dom'

const Info = ({ user }) => {
    if (user.dogs) {
        const dogList = user.dogs.map((dog) => {
            return <Link to={`/${dog.id}`} key={dog.id}>
                <div className='dog-btn'>
                    <button>{dog.name}</button>
                </div> 
                    </Link>
        })
    
        return (
            <div className='user-info-container'>
                <div className='user-info'>
                    <h2>User Information</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
                <hr></hr>
                <div className='pets'>
                    <h3>Pets:</h3>
                    { dogList }
                </div>
            </div>
        )
        
    }
}

export default Info
