import React from 'react';
import Nav from '../components/Nav';
import AddFamily from '../components/AddFamily';


const AddFamilyView = () => {
    return (
        <div>
            <Nav />
            <AddFamily scope={"add"} />            
        </div>
    );
}

export default AddFamilyView;