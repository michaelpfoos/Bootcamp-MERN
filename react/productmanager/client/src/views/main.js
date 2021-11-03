import React, { useState } from 'react';
import AllProducts from '../components/AllProducts';
import ProductManager from '../components/ProductManager';
import axios from 'axios';


const Main = () => {
    const [productFormSubmitted, setProductFormSubmitted] = useState(false);

    //in theory I should be able to declare a function to delete the product here and pass it as a prop to any component that needs it.
    const deleteProduct = (_id, e) => {

        const url = `http://linuxhome:8000/api/productmanagers/${_id}`          

        axios.delete(url)
            .then(res=>{                
                setProductFormSubmitted(!productFormSubmitted); //Set the submitted flag to true in main.
        })       
    }

    return (
        <div>
            <ProductManager 
               productFormSubmitted={productFormSubmitted} 
               setProductFormSubmitted={setProductFormSubmitted}                           
            />
            <AllProducts 
                productFormSubmitted={productFormSubmitted}                 
                deleteProduct={deleteProduct}      
            />  
        </div>
    )
}

export default Main;