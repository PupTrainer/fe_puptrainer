import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const CreateUser = ({ createNewUser }) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    return (
      <div>
            <h1 className='title'>Welcome to PupTrainer</h1>
        <div className='login-page'>
            <div className='input-container'>
                <p>Please enter a <b>username</b> and <b>email</b></p>
                <input
                className='input'
                type='text'
                placeholder='Username'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />
                <input
                className='input'
                type='text'
                placeholder='Email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
                <Link to='/confirm'>
                  <button onClick={() => {
                    createNewUser(username, email);
                  }}className='button'>Register</button>
                </Link>
                  <p>If already a user, click <Link to='/'>Here</Link> to login</p>
            </div>
        </div>
      </div>
    )
}
export default CreateUser