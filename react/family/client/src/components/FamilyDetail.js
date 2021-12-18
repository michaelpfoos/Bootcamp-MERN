import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FamilyDetail = (props) => {

    const { id } = props;
    const [familyMemberName, setFamilyMemberName] = useState('');
    const [familyMemberAge, setFamilyMemberAge] = useState('');

    useEffect(()=>{
      
        const url = `http://linuxhome:8000/api/family/${id}`

        axios.get(url)
        .then((res)=>{
            setFamilyMemberName(res.data[0].name);
            setFamilyMemberAge(res.data[0].age);                         
        })
        .catch((err)=>{
            console.log(err);
        });

        
    },[])

    return (
        <div>
            <p>Name: {familyMemberName}</p>
            <p>Age: {familyMemberAge}</p>
        </div>
    );

}

export default FamilyDetail;