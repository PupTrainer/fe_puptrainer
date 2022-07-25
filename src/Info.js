import React from 'react'
import './Info.css'
import { Link } from 'react-router-dom'

const Info = ({ user, setDogId }) => {
    if (user.dogs) {
        const dogList = user.dogs.map((dog) => {
            return <Link to={`/${dog.id}`} key={dog.id}>
                <div className='dog-btn'>
                    <button onClick={() => setDogId(dog.id)}>{dog.name}</button>
                </div> 
                    </Link>
        })
        
        return (
            <div className='user-info-container'>
                <div className='user-info'>
                    <h2>User Information</h2>
                    <hr></hr>
                    <p className='p-styling'><span className='span-styling'>Username:</span> {user.username}</p>
                    <p className='p-styling'><span className='span-styling'>Email:</span> {user.email}</p>
                </div>
                <hr></hr>
                    <h3 className='h3-styling'>Pets:</h3>
                <div className='pets'>
                    { dogList }
                </div>
            </div>
        )
        
    }
}

export default Info;
