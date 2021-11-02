import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = (props) => {
    const { _id } = props;
    const [product, setProduct] = useState({});

    useEffect(()=>{
        const url = `http://linuxhome:8000/api/productmanagers/${_id}`;

        axios.get(url)
        .then(res=>{
            const { data:[firstproduct] } = res;
            setProduct(firstproduct);
            //setProduct(res.data[0]);                  
        });
    }, [])

    return (
        <div className="mx-auto mt-3">
            <h1 className="text-center">{ product.title }</h1>
            <p className="text-center">{ `Price: ${product.price}` }</p>
            <p className="text-center">{ `Description: ${product.description}` }</p> 
        </div>
    );
}

export default ProductDetails;