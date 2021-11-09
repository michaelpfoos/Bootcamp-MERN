import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    const { _id, styling, reload, setReload } = props;

    const deleteAuthor = (e) => {
        const url = `http://linuxhome:8000/api/authors/${_id}`;         
    
        axios.delete(url)
          .then(res=>{   
            //Reroute or refresh depending on the prop.
            setReload(!reload);
            navigate("/");      
          })       
        }

    return (
        <button className={styling} onClick={deleteAuthor}>
            Delete
        </button>
    );
}

export default DeleteButton;