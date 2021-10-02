import React, { useState } from 'react';

const FaceCard = (props) => {
    const {lastName, firstName, age, hairColor} = props;
    const [showAge, increaseAge] = useState(age); 
    return (        
        <div className="facecard">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {showAge}</p>
            <p>hair Color: {hairColor}</p>
            <button onClick={ (event) => increaseAge(showAge + 1)}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}

export default FaceCard;