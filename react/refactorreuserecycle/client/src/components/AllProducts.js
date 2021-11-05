import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    const { productFormSubmitted, setProductFormSubmitted } = props;

    useEffect(()=>{
        axios.get('http://linuxhome:8000/api/productmanagers/')
        .then(res=>{
            setProducts(res.data);            
        });
    }, [productFormSubmitted])

    return(
        <div className="border-top border-dark border-1 mt-4">
            <h1 className="text-center mt-3 fs-1 mb-3">All Products: </h1>  
            {products.map((product, index)=>{
                return (
                    <div key={index} className="d-flex justify-content-between mx-auto custom_flex mb-3">
                        <Link className="text-center d-block" to={`/${product._id}`}>{product.title}</Link>
                        <div>                           
                            <DeleteButton _id={product._id} reroute={false} setProductFormSubmitted={setProductFormSubmitted} productFormSubmitted={productFormSubmitted} />                                                 
                            <Link className="btn btn-secondary mx-1 custom_button" to={`/${product._id}/edit`}>Edit</Link>                          
                        </div>                                                
                    </div>
                )                 
            })}          
        </div>

    );
}

export default AllProducts;
