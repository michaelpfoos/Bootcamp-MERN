import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

const Root = () => {
    return(
        <div>
            <Header LinkTo={ "add" } LeadIn={ "We have quotes by:" } />
            <Main />           
        </div>
    )
}


export default Root;