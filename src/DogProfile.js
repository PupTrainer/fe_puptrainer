import React from 'react';

const DogProfile = ({ id, name, age, breed }) => {
    return(
        <div>
            <h1>{ id }</h1>
            <h1>{ name }</h1>
            <h1>{ age }</h1>
            <h1>{ breed }</h1>
        </div>
    )
}

export default DogProfile;