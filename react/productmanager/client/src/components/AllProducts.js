import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('http://linuxhome:8000/api/productmanagers/')
        .then(res=>{
            setProducts(res.data);            
        });
    }, [])

    return(
        <div className="border-top border-dark border-1 mt-4">
            <h1 className="text-center mt-3 fs-1">All Products: </h1>  
            {products.map((product, index)=>{
                return <a className="text-center d-block" href={`http://linuxhome:3000/${product._id}`}>{product.title}</a>
            })}          
        </div>

    );
}

export default AllProducts;