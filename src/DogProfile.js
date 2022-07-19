import React, { useEffect, useState } from 'react';
import './DogProfile.css'
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const DogProfile = ({ id, name, age, breed, dogSkills}) => {
    
    
    const allSkills = dogSkills.map(skill => {
        return(
            <div id={skill.id} key={skill.id}>
            <Link to={`/skill/${skill.id}`}>
                <div>
                    <p>{skill.name}</p>
                </div>
            </Link>
            </div>
        )
    })
    

    return(
        <div>
            <div className='dog-profile-container'>
                <div className='dog-info-container'>
                    <div className='dog-info'>
                        <img src='https://i.pinimg.com/originals/5e/9f/6c/5e9f6cf7fc503efe4ab6d4c1984cf326.jpg' alt='smiling dog'/>
                        <div className='dog-details'>
                            <p>{ id }</p>
                            <p>Name: { name }</p>
                            <p>Age: { age }</p>
                            <p>Breed: { breed }</p>
                        </div>
                    </div>
                    <div className='dog-known-skills-container'>
                        <h1 className='known-skills-title'>Known Skills:</h1>
                        <div className='dog-known-skills'>
                        </div>
                    </div>
                </div>
                <div className='dog-training'>
                    <h1 className='training-title'>Training</h1>
                    <div className='skills'>
                        {allSkills}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DogProfile;