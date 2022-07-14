import React from 'react'
import './Info.css'

const Info = ({ user }) => {
    const dogList = user.dogs.map((dog) => {
        return <>
            <button>{dog.name}</button> <br></br>
            </>
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

export default Info
