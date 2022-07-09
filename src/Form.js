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
            </input><br></br>
            <input type="checkbox" name="know-skills" value="Skill 1"/>
            <label for="html">Skill 1</label><br></br>
            <input type="checkbox" name="know-skills" value="Skill 2"/>
            <label for="html">Skill 2</label><br></br>
            <input type="checkbox" name="know-skills" value="Skill 3"/>
            <label for="html">Skill 3</label><br></br>
            <input type="checkbox" name="know-skills" value="Skill 4"/>
            <label for="html">Skill 4</label><br></br>
            <button>Register Pet</button>
        </div>
    )
}

export default Form 