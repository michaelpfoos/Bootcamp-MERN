import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const ProductDetails = (props) => {
    const { _id, deleteProduct } = props;
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
            <Link className="btn btn-primary d-block mx-auto custom_button-2" to={`/${product._id}/edit`}>Edit</Link>   
            <input type="button" value="Delete Product" className="btn btn-secondary d-block mx-auto custom_button-2 mt-1" onClick={deleteProduct.bind(this, _id)} />           
        </div>
    );
}

export default ProductDetails;