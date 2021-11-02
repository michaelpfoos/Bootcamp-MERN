import React, { useState } from 'react';
import axios from 'axios';

const ProductManager = (props) => {

     const {productFormSubmitted, setProductFormSubmitted} = props;     
     const [title, setTitle] = useState('');
     const [price, setPrice] = useState(0);
     const [description, setDescription] = useState('');

     const postData = (e) => { 
         //Prevent default behavior so it doesn't clear state
         e.preventDefault();     
 
        //const url = '//linuxhome:8000/api/productmanagers/';     
        const url = 'http://linuxhome:8000/api/productmanagers/';      
        
        const data = {
            title,
            price,
            description
        };

        axios.post(url, data)
        .then((res)=> {
            console.log(res);
            console.log(res.data);
            setProductFormSubmitted(!productFormSubmitted); //Set the submitted flag to true
        })
        .catch((err)=> console.log(err));    

        // axios.post(url, {            
        //     title: title,
        //     price: price,
        //     description: description
        // })
        // .then((res)=> {
        //     console.log(res);
        // })
        // .catch((err)=> console.log(err));     
   

        // //try fetch (This actually works)
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
                    <input className="flex-grow-2 lh-1" value={title} onChange={ (e) => setTitle(e.target.value) } name="title"></input>
                </div>
                <div className="d-flex bg-light p-3 mt-2 gap-3">
                    <label className="flex-grow-1 fs-6" htmlFor="price">Price</label>
                    <input className="flex-grow-2 lh-1 " value={price} onChange={ (e) => setPrice(e.target.value) } name="price"></input>
                </div>
                <div className="d-flex bg-light p-3 mt-2 gap-3">
                    <label htmlFor="description">Description</label>
                    <input name="description" value={description} onChange={ (e) => setDescription(e.target.value) }></input>
                </div>                
                <input type="submit" value="Submit" className="btn btn-secondary mt-2 d-block mx-auto"/>
            </form>
        </div>
    );
}

export default ProductManager;