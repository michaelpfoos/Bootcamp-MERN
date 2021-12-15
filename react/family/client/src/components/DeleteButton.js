import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {

    const { id, refresh, setRefresh } = props;

    const deleteFamilyMember = () => {

        const url = `http://linuxhome:8000/api/family/${id}`; //use back ticks instead of regular quotes.

        axios.delete(url)
        .then((res)=>{
            setRefresh(!refresh);
        })
        .catch((err)=>{
            console.log(err);
        });
        
    }

    return (
      <input type="button" className="deleteButton" value="Delete" onClick={deleteFamilyMember} />
    );
}

export default DeleteButton;