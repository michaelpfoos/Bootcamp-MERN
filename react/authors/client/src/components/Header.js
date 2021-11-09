import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';

const leadInStyle = {
    color: 'purple'
};

const Header = (props) => {

    const { LinkTo, LeadIn } = props;
    const [linkValue, setLinkValue] = useState('');

    useEffect(()=>{
        if (LinkTo === 'add') {
            setLinkValue('Add an author');
        }
        else {
            setLinkValue('Home');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const linkOut = () => {
        if (LinkTo === 'add') {
            navigate('/new/');            
        }
        else {
            navigate('/');
        }
    }      

    return(
        <div>
            <h1 className="fw-bold">Favorite Authors</h1>
            <span className="fake-link" onClick={linkOut}>{linkValue}</span>
            <p style={leadInStyle}>{LeadIn}</p>
        </div>
    );
}


export default Header;