import React from 'react'
import './login.css'

const Login = () => {
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
                />  
                <input
                className='input'
                type='text'
                placeholder='Email'
                />       
                <button className='button'>Login</button>  
            </div>
        </div>
        </div>
    )
}
export default Login