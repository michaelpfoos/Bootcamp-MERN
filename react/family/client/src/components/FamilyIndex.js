import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import { Link } from '@reach/router'

const FamilyIndex = () => {

    const [family, setFamily] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        const url = 'http://linuxhome:8000/api/family'; //The same url you use in postman.

        axios.get(url)
        .then((res)=>{
            setFamily(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, [refresh])

    return (
        <div>
            <div className="flex">   
                <div className="name">
                    <p>Name: </p>
                </div> 
                <div className="age">
                    <p>Age: </p>
                </div> 
            </div>
        {
            family.map((value, index)=>{
                return (
                <div className="flex">   
                    <div className="name">
                        <p className="paragraphName">{value.name}</p>
                        <DeleteButton id={value._id} refresh={refresh} setRefresh={setRefresh} />
                        <Link className="editButton" to={"/edit/" + value._id}>Edit</Link>
                        <Link className="editButton" to={"/" + value._id}>Details</Link>
                    </div> 
                    <div className="age">
                        <p>{value.age}</p>
                    </div> 
                </div>
                );
            })
        }
    </div>
    );
}

export default FamilyIndex;