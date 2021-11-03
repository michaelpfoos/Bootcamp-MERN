import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router' //https://reach.tech/router/api/navigate

const EditProduct = (props) => {
    
     const { _id } = props;
     const [title, setTitle] = useState('');
     const [price, setPrice] = useState(0);
     const [description, setDescription] = useState('');

     const url = `http://linuxhome:8000/api/productmanagers/${_id}`;

     useEffect(()=>{        

        axios.get(url)
        .then(res=>{               
            setTitle(res.data[0].title); 
            setPrice(res.data[0].price);
            setDescription(res.data[0].description);
        });
    }, [])

     const postData = (e) => { 
         //Prevent default behavior so it doesn't clear state
         e.preventDefault();            
        
        const data = {
            title,
            price,
            description
        };

        axios.put(url, data)
        .then((res)=> {
            //console.log(res);
            //console.log(res.data);  
            //time to head back
            navigate(`/`);          
        })
        .catch((err)=> console.log(err));        

       
          
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
                <input type="submit" value="Update" className="btn btn-secondary mt-2 d-block mx-auto"/>
            </form>
        </div>
    );
}

export default EditProduct;