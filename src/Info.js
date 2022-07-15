import React from 'react'
import './Info.css'

const Info = ({ user }) => {
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
                <button>Dog 1</button>
                <button>Dog 2</button>
            </div>
        </div>
    )
}

export default Info
