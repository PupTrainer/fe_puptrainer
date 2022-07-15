import React from 'react'
import './Info.css'

const Info = ({ user }) => {
    if (user.dogs) {
        const dogList = user.dogs.map((dog) => {
            return <div key={dog.id} className='dog-btn'>
                    <button>{dog.name}</button>
                </div> 
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
