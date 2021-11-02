import React from 'react';
import AllProducts from '../components/AllProducts';
import ProductManager from '../components/ProductManager';


const Main = () => {
    return (
        <div>
            <ProductManager />
            <AllProducts />    
        </div>
    )
}

export default Main;