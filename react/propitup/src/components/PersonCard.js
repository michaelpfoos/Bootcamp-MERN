import React from 'react';

const PersonCard = (props) => {
    const {lastName, firstName, age, hairColor} = props;
    return (
        <div className="container">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
}

export default PersonCard;