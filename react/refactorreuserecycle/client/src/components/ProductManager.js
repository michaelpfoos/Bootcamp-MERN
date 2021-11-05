import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router' //https://reach.tech/router/api/navigate

const ProductManager = (props) => {

     const {productFormSubmitted, setProductFormSubmitted, _id} = props;     
     const [title, setTitle] = useState('');
     const [price, setPrice] = useState(0);
     const [description, setDescription] = useState('');         
    
    
    useEffect(()=>{
        
        //The axios call should only trigger if the id is passed through.
        if (_id) {
            const url = `http://linuxhome:8000/api/productmanagers/${_id}`;

            axios.get(url)
            .then(res=>{               
                setTitle(res.data[0].title); 
                setPrice(res.data[0].price);
                setDescription(res.data[0].description);
            });
        }   
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

     const postData = (e) => { 
         //Prevent default behavior so it doesn't clear state
         e.preventDefault();  

         const data = {
            title,
            price,
            description
        };
       
        if (_id) {
            const url = `http://linuxhome:8000/api/productmanagers/${_id}`;    
    
            axios.put(url, data)
            .then((res)=> {         
                //time to head back
                navigate(`/`);          
            })
            .catch((err)=> console.log(err)); 
        } 

        else {
            const url = 'http://linuxhome:8000/api/productmanagers/';          
    
            axios.post(url, data)
            .then((res)=> {          
                setProductFormSubmitted(!productFormSubmitted); //Set the submitted flag to true in main.
            })
            .catch((err)=> console.log(err));         
    
            //clear state to set the inputs back.
            setTitle('');
            setPrice('');
            setDescription('');
        }
        
          
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