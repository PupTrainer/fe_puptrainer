import React from 'react'
import './Skill.css'

const Skill = ({ name, id, description, level, criteria, youtubeLink }) => {
  console.log(description)
  return (
    <div>
      <div>
        <div className='description'>
          <h2>Skill Description</h2>
          <p>{name}</p>
          <p>Level: {level}</p>
          <p>{description}</p>
        </div>
        <div>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtubeLink}`} title="YouTube video player" frameBorder="0"></iframe>
        </div>
        <div>
          <p>Pass Requirements:<br></br>{criteria}</p>
        </div>
        <button>Complete Training</button>
      </div>
    </div>
  )
}

export default Skill