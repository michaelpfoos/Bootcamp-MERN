import React from 'react';
import { Link } from '@reach/router'

const Nav = () => {
    return (
        <div className="nav">
            <h1 className="header">I am the header!</h1>    
            <Link className="addNav" to="/add">Add a Family Member</Link>                              
        </div>
    );
}

export default Nav;