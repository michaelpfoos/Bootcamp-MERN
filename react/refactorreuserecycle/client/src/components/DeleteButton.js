import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    const { _id, reroute, setProductFormSubmitted, productFormSubmitted } = props;
    
    const deleteProduct = (e) => {

    const url = `http://linuxhome:8000/api/productmanagers/${_id}`       

    axios.delete(url)
      .then(res=>{   
        //Reroute or refresh depending on the prop.
        ( reroute === true ) ?  navigate("/") : setProductFormSubmitted(!productFormSubmitted); //this works        
      })       
    }

    return(
        <button className="btn btn-secondary custom_button" onClick={deleteProduct}>
            Delete
        </button>   
    );
}

export default DeleteButton;