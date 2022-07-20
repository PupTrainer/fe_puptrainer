import React, { useState } from 'react'
import './Form.scss'

const Form = ({ user, registerDog }) => {
  const [ name, setName] = useState('');
  const [ age, setAge] = useState('');
  const [ breed, setBreed] = useState('');
  const [ skills, setSkills] = useState([]);

  const submitDog = (event) => {
    event.preventDefault();
    registerDog(name,age,breed,skills);
  }
  
  return (
    <div className='form-container'>
      <form onSubmit={(event) => submitDog(event)}>
        <h2>Register Pets</h2>
        <div className='input-fields'>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          >
          </input>
          <input
            type='number'
            placeholder='Age'
            value={age}
            onChange={(event) => setAge(event.target.value)}
            required
          >
          </input>
          <input
            type='text'
            placeholder='Breed'
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            required
          >
          </input><br></br>
        </div>
        <input type="submit" placeholder="Register Pet" />
      </form>
    </div>
  )
}

export default Form;
