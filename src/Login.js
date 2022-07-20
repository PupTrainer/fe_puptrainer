import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = ({loginUser}) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    const clearInputs = () => {
      setUsername('');
      setEmail('');
    }

    return (
      <div>
            <h1 className='title'>Welcome to PupTrainer</h1>
        <div className='login-page'>
            <div className='input-container'>
                <p>Please login</p>
                <input
                className='input'
                type='text'
                placeholder='Username'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                />
                <input
                className='input'
                type='text'
                placeholder='Email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                />
                {username && email ? <Link to="/homepage">
                  <input type="submit" placeholder="Login" className='button' onClick={() => {
                    loginUser(username, email);
                    clearInputs();
                  }}/>
                </Link>: <Link to="/">
                  <input type="submit" placeholder="Login" className='button' onClick={() => {
                    loginUser(username, email);
                    clearInputs();
                  }}/>
                </Link>}
                  <p><Link to="create-user">Register here</Link></p>
                
            </div>
        </div>
      </div>
    )
}
export default Login
