import React, { Component } from 'react';

class FaceCard extends Component {

    constructor(props) {
        super(props);
            this.state = {
                showAge: this.props.age
            };           
    }    

    render() {
        return (
            <div className="facecard">
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.showAge}</p>
                <p>hair Color: {this.props.hairColor}</p>
            <button onClick={ () => { this.setState({ showAge: this.state.showAge += 1 }) }}> Birthday Button for {this.props.firstName} {this.props.lastName}</button>
        </div>
        );
    }
}

export default FaceCard;