import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    const { productFormSubmitted, deleteProduct} = props;

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
                            <input type="button" value="Delete" className="btn btn-secondary me-1" onClick={deleteProduct.bind(this, product._id)} />                           
                            <Link className="btn btn-secondary custom_button" to={`/${product._id}/edit`}>Edit</Link>                          
                        </div>
                                                
                    </div>
                )                 
            })}          
        </div>

    );
}

export default AllProducts;
