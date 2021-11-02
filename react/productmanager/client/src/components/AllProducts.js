import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    const { productFormSubmitted } = props;

    useEffect(()=>{
        axios.get('http://linuxhome:8000/api/productmanagers/')
        .then(res=>{
            setProducts(res.data);            
        });
    }, [productFormSubmitted])

    return(
        <div className="border-top border-dark border-1 mt-4">
            <h1 className="text-center mt-3 fs-1">All Products: </h1>  
            {products.map((product, index)=>{
                return <Link className="text-center d-block" to={`/${product._id}`}>{product.title}</Link>
            })}          
        </div>

    );
}

export default AllProducts;