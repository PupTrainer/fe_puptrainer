import React from 'react'
import './Skill.css'

const Skill = ({ name, id, description, level, criteria, youtubeLink, registerDogSkill}) => {
  return (
    <div className='skill-container'>
        <div className='description'>
            <h2 className='skill-title'>Skill Description</h2>
            <p className='skill-name'>{name}</p>
            <p>Level: {level}</p>
            <p>{description}</p>
            <div>
              <p className='requirement'>Pass Requirements:</p>
              <p>{criteria}</p>
            </div>
        </div>
          <div>
            <iframe className='video' width="560" height="315" src={`https://www.youtube.com/embed/${youtubeLink}`} title="YouTube video player" frameBorder="0"></iframe>
            <button className='training-btn' onClick={() => registerDogSkill(id)}>Complete Training</button>
          </div>
    </div>
  )
}

export default Skill