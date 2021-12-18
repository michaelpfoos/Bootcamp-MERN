import React from 'react';
import Nav from '../components/Nav';
import FamilyDetail from '../components/FamilyDetail';

const FamilyDetailView = (props) => {

    const { id } = props;

    return (
        <div>
            <Nav />
            <FamilyDetail id={id} />
        </div>
    )
}

export default FamilyDetailView;