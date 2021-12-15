import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const AddFamily = (props) => {

    const { scope, id } = props;

    const [newFamilyMemberName, setNewFamilyMemberName] = useState('');
    const [newFamilyMemberAge, setNewFamilyMemberAge] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(()=>{
        if ( scope === 'edit') {
            const url = `http://linuxhome:8000/api/family/${id}`

            axios.get(url)
            .then((res)=>{
                setNewFamilyMemberName(res.data[0].name);
                setNewFamilyMemberAge(res.data[0].age);                
            })
            .catch((err)=>{
                console.log(err);
            });

        }
    },[])

    const submitFamily = (e) => {

        e.preventDefault();

        const data = {
            name: newFamilyMemberName,
            age: newFamilyMemberAge
        };

        if ( scope === 'add') {            
    
            const url = 'http://linuxhome:8000/api/family/new/';            
    
            axios.post(url, data)
            .then((res)=>{
                navigate('/'); //If the post succeeds go home page.
            })
            .catch((err)=>{
                setErrors(err.response.data.errors);  
            });
        }

        //For editing a family member.
        else {
            const url = `http://linuxhome:8000/api/family/${id}`;

            //For updating use put.
            axios.put(url, data)
            .then((res)=>{
                navigate('/'); //If the post succeeds go home page.
            })
            .catch((err)=>{
                setErrors(err.response.data.errors);                 
            });
        }


    }
    

    return (
        <div>
            <form onSubmit={submitFamily} className="addFamilyForm">
                <div>
                    <label className="formName">Name: </label>
                    <input type="text" onChange={(e)=>setNewFamilyMemberName(e.target.value)} value={newFamilyMemberName} />                    
                    {errors.name? <p className="error">{errors.name.message}</p> : null}                    
                </div>
                <div>
                    <label className="formAge">Age: </label>
                    <input type="text" onChange={(e)=>setNewFamilyMemberAge(e.target.value)} value={newFamilyMemberAge} />
                    {errors.age? <p className="error">{errors.age.message}</p> : null}   
                </div>
                <input className="addButtton" type="submit" value="submit" />
            </form>
        </div>
    );
}

export default AddFamily;

