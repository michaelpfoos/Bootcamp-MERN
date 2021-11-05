import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

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
    }, [_id])

    return (
        <div className="mx-auto mt-3">
            <h1 className="text-center">{ product.title }</h1>
            <p className="text-center">{ `Price: ${product.price}` }</p>
            <p className="text-center">{ `Description: ${product.description}` }</p>
            <div className="mx-auto custom_button">
                <Link className="btn btn-primary d-inline-block mb-1 custom_button" to={`/${product._id}/edit`}>Edit</Link>               
                <DeleteButton _id={_id} reroute={true} />  
            </div>                                  
        </div>
    );
}

export default ProductDetails;