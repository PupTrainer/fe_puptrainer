import React from 'react'
import { Link } from 'react-router-dom'
import './Skill.css'

const Skill = ({ name, id, description, level, criteria, youtubeLink, registerDogSkill, dogId}) => {
  return (
    <div className='skill-container'>
        <div className='description'>
            <div className='skill-info'>
              <h2 className='skill-title'>Skill Description</h2>
              <p className='skill-name'>{name}</p>
              <p className='skill-level'>Level: {level}</p>
              <p className='skill-des'>{description}</p>
            </div>
            <div className='pass'>
              <p className='requirement'>Pass Requirements:</p>
              <p className='req-des'>{criteria}</p>
            </div>
        </div>
          <div>
            <iframe className='video' width="560" height="315" src={`https://www.youtube.com/embed/${youtubeLink}`} title="YouTube video player" frameBorder="0"></iframe>
            <Link to={`/${dogId}`}><button className='training-btn' onClick={() => registerDogSkill(id)}>Complete Training</button></Link>
          </div>
    </div>
  )
}

export default Skill