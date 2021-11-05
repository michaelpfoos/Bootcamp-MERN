import React, { useState } from 'react';
import AllProducts from '../components/AllProducts';
import ProductManager from '../components/ProductManager';


const Main = () => {    
    const [productFormSubmitted, setProductFormSubmitted] = useState(false); 

    return (
        <div>
            <ProductManager 
               productFormSubmitted={productFormSubmitted} 
               setProductFormSubmitted={setProductFormSubmitted}                           
            />
            <AllProducts 
                productFormSubmitted={productFormSubmitted} 
                setProductFormSubmitted={setProductFormSubmitted}                    
            />  
        </div>
    )
}

export default Main;