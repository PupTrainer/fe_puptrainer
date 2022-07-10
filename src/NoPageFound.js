import React from 'react'
import { Link } from 'react-router-dom';
import './NoPageFound.css'

const NoPageFound = () => {
    return (
        <div className='fof-box'>
            <h1 className='fof-header'>Our search dogs looked everywhere, but they couldn't find that page...</h1>
            <img className='fof-image' src='https://c.tenor.com/OJp495W-kGYAAAAC/fish-fanatic-dog.gif'></img>
            <p className='fof-return-text'>Click <Link to='/homepage'>here</Link> to go back to the main page</p>
        </div>
    )
}
export default NoPageFound