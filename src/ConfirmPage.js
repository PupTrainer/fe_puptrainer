import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const ConfirmPage = ({createNewUser}) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    return (
      <div>
            <h1 className='title'>Welcome to PupTrainer</h1>
        <div className='login-page'>
            <div className='input-container'>
            <p>User created! <Link to='/'>Please login.</Link></p>
            </div>
        </div>
      </div>
    )
}
export default ConfirmPage