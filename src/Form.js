import React, { useState } from 'react'
import './Form.scss'

const Form = ({ user }) => {
  const [ name, setName] = useState('');
  const [ age, setAge] = useState('');
  const [ breed, setBreed] = useState('');
  const [ skills, setSkills] = useState([]);

//  [...skills, new skill]

const onChange = (event) => {

}

    return (
        <div className='form-container'>
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
            <label for="html">Skill 1</label><br></br>
            <input type="checkbox" name="know-skills" value="Skill 2"/>
            <label for="html">Skill 2</label><br></br>
            <input type="checkbox" name="know-skills" value="Skill 3"/>
            <label for="html">Skill 3</label><br></br>
            <input type="checkbox" name="know-skills" value="Skill 4"/>
            <label for="html">Skill 4</label><br></br>
            <input type="checkbox" name="know-skills" value="Skill 5"/>
            <label for="html">Skill 5</label><br></br>
            <button>Register Pet</button>
        </div>
    )
}

export default Form
