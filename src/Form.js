import React, { useState } from 'react'
import './Form.scss'

const Form = ({ user, registerDog }) => {
  const [ name, setName] = useState('');
  const [ age, setAge] = useState('');
  const [ breed, setBreed] = useState('');
  const [ skills, setSkills] = useState([]);

//  [...skills, new skill]

const submitDog = (event) => {
  event.preventDefault();
  registerDog(name,age,breed,skills);
}

    return (
        <div className='form-container'>
          <form onSubmit={(event) => submitDog(event)}>
            <h2>Register Pets</h2>
            <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            >
            </input>
            <input
            type='text'
            placeholder='Age'
            value={age}
            onChange={(event) => setAge(event.target.value)}
            >
            </input>
            <input
            type='text'
            placeholder='Breed'
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            >
            </input><br></br>
            <input type="checkbox" name="know-skills" value="Skill 1"/>
            <label>Skill 1</label><br></br>
            <input type="checkbox" name="know-skills" value="Skill 2"/>
            <label>Skill 2</label><br></br>
            <input type="checkbox" name="know-skills" value="Skill 3"/>
            <label>Skill 3</label><br></br>
            <input type="checkbox" name="know-skills" value="Skill 4"/>
            <label>Skill 4</label><br></br>
            <input type="checkbox" name="know-skills" value="Skill 5"/>
            <label>Skill 5</label><br></br>
            <input type="submit" placeholder="Register Pet" />
          </form>
        </div>
    )
}

export default Form
