import React, { Component } from 'react';

class FaceCard extends Component {

    constructor(props) {
        super(props);
            this.state = {
                showAge: this.props.age
            };           
    }     

    render() {

        //we can deconstruct inside the render for classed based components.
        const {lastName, firstName} = this.props;

        return (
            <div className="facecard">
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.showAge}</p>
                <p>hair Color: {this.props.hairColor}</p>
            <button onClick={ () => { this.setState({ showAge: this.state.showAge += 1 }) }}> Birthday Button for {firstName} {lastName}</button>
        </div>
        );
    }
}

export default FaceCard;