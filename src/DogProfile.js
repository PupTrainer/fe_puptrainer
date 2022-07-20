import React, { useEffect, useState } from 'react';
import './DogProfile.css'
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import dogimg from './images/dog.png'

const DogProfile = ({ id, name, age, breed, dogSkills, skills}) => {


    let knownSkillIds = []
    const knownSkills = skills.map(skill => {
        knownSkillIds.push(skill.id)
            return (
                <div>
                    <p id={skill.id}>{skill.name}</p>
                </div>
            )
    })
    
    const allSkills = dogSkills.map(skill => {
        if(!knownSkillIds.includes(skill.id)) {
            return(
                <div id={skill.id} key={skill.id}>
                <Link to={`/skill/${skill.id}`}>
                    <div className='training-skill-container'>
                        <p className='training-skill'>{skill.name}</p>
                    </div>
                </Link>
                </div>
            )
        }
    })
    

    return(
        <div>
            <div className='dog-profile-container'>
                <div className='dog-info-container'>
                    <div className='dog-info'>
                        <img className='dog-img' src={dogimg} alt='Dog silhouette'/>
                        <div className='dog-details'>
                            <p>Name: { name }</p>
                            <p>Age: { age }</p>
                            <p>Breed: { breed }</p>
                        </div>
                    </div>
                    <div className='dog-known-skills-container'>
                        <h1 className='known-skills-title'>Known Skills:</h1>
                        <div className='dog-known-skills'>
                            {knownSkills}
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