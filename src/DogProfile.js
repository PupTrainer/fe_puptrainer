import React, { useState } from 'react';
import './DogProfile.css'

const DogProfile = ({ id, name, age, breed }) => {
    const [ skills, setSkills ] = useState([])
    return(
        <div>
            <div className='dog-profile-container'>
                <div className='dog-info-container'>
                    <div className='dog-info'>
                        <img src='https://i.pinimg.com/originals/5e/9f/6c/5e9f6cf7fc503efe4ab6d4c1984cf326.jpg' alt='smiling dog'/>
                        <div className='dog-details'>
                            <h1>{ id }</h1>
                            <h1>Name: { name }</h1>
                            <h1>Age: { age }</h1>
                            <h1>Breed: { breed }</h1>
                        </div>
                    </div>
                    <div className='dog-known-skills-container'>
                        <h1 className='known-skills-title'>Known Skills:</h1>
                        <div className='dog-known-skills'>
                            <h1>Skill</h1>
                            <h1>Skill</h1>
                            <h1>Skill</h1>
                            <h1>Skill</h1>
                            <h1>Skill</h1>
                            <h1>Skill</h1>
                        </div>
                    </div>
                </div>
                <div className='dog-training'>
                    <h1 className='training-title'>Training</h1>
                    <div className='skills'>
                        <h1>Skill</h1>
                        <h1>Skill</h1>
                        <h1>Skill</h1>
                        <h1>Skill</h1>
                        <h1>Skill</h1>
                        <h1>Skill</h1>
                    </div>
                    <div className='skills'>
                        <h1>Skill</h1>
                        <h1>Skill</h1>
                        <h1>Skill</h1>
                        <h1>Skill</h1>
                        <h1>Skill</h1>
                        <h1>Skill</h1>
                    </div>
                    <div className='skills'>
                        <h1>Skill</h1>
                        <h1>Skill</h1>
                        <h1>Skill</h1>
                        <h1>Skill</h1>
                        <h1>Skill</h1>
                        <h1>Skill</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DogProfile;