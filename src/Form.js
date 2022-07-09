import React from 'react'

const Form = () => {
    return (
        <div>
            <h2>Register Pets</h2>
            <input
            type='text'
            placeholder='Name'
            >
            </input>
            <input
            type='text'
            placeholder='Age'
            >
            </input>
            <input
            type='text'
            placeholder='Breed'
            >
            </input>
            <input type="radio" name="know-skills" value="Skill 1"/>
            <label for="html">Skill 1</label><br></br>
            <input type="radio" name="know-skills" value="Skill 2"/>
            <label for="html">Skill 2</label><br></br>
            <input type="radio" name="know-skills" value="Skill 3"/>
            <label for="html">Skill 3</label><br></br>
            <input type="radio" name="know-skills" value="Skill 4"/>
            <label for="html">Skill 4</label><br></br>
        </div>
    )
}

export default Form 