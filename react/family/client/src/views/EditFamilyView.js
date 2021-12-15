import React from 'react';
import Nav from '../components/Nav';
import AddFamily from '../components/AddFamily';


const EditFamilyView = (props) => {

    const { id } = props;

    return (
        <div>
            <Nav />
            <AddFamily scope={"edit"} id={id} />            
        </div>
    );
}

export default EditFamilyView;