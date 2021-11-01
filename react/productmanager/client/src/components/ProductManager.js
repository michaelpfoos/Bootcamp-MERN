import React, { useState } from 'react';
import axios from 'axios';

const ProductManager = () => {

     const [title, setTitle] = useState();
     const [price, setPrice] = useState();
     const [description, setDescription] = useState();

     const postData = (e) => { 
         //Prevent default behavior so it doesn't clear state
         e.preventDefault();     
 
        const url = '//linuxhome:8000/api/productmanagers/';         

        axios.post(url, {            
            title: title,
            price: price,
            description: description
        })
        .then((res)=> {
            console.log(res);
        })
        .catch((err)=> console.log(err));     
   

        //try fetch (This actually works)
        // const data = {
        //     title: title,
        //     price: price,
        //     description: description
        // };

        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success: ', data);
        // })
        // .catch((error) => {
        //     console.log('Error:', error);
        // });

          //clear state to set the inputs back.
          setTitle('');
          setPrice('');
          setDescription('');
          
     }
    

    return(
        <div className="mt-3 d-flex justify-content-center">
            <form onSubmit={postData}>
                <h1 className="text-center">Product Manager</h1>     
                <div className="d-flex bg-light p-3 gap-3">
                    <label className="flex-grow-1 fs-6" htmlFor="title">Title</label>
                    <input className="flex-grow-2 lh-1" value={title} onChange={ (e) => setTitle(e.target.value) } name="Title"></input>
                </div>
                <div className="d-flex bg-light p-3 mt-2 gap-3">
                    <label className="flex-grow-1 fs-6" htmlFor="Price">Price</label>
                    <input className="flex-grow-2 lh-1 " value={price} onChange={ (e) => setPrice(e.target.value) } name="Price"></input>
                </div>
                <div className="d-flex bg-light p-3 mt-2 gap-3">
                    <label htmlFor="Description">Description</label>
                    <input name="Description" value={description} onChange={ (e) => setDescription(e.target.value) }></input>
                </div>                
                <input type="submit" value="Submit" className="btn btn-secondary mt-2 d-block mx-auto"/>
            </form>
        </div>
    );
}

export default ProductManager;