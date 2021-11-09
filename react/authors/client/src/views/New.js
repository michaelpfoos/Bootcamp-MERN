import React from 'react';
import Header from '../components/Header';
import AuthorDetails from '../components/AuthorDetails';

const New = () => {
    return(
        <div>
            <Header LeadIn={ "Add a new author:" } />
            <AuthorDetails />                
        </div>
    )
}


export default New;