import React from 'react';
import Header from '../components/Header';
import AuthorDetails from '../components/AuthorDetails';

const Edit = (props) => {

    const { _id } = props;

    return(
        <div>
            <Header LeadIn={ "Edit this author" }/>
            <AuthorDetails _id={_id} />                
        </div>
    )
}


export default Edit;