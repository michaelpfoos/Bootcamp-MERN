//1. Import useReducer
import React, { useReducer } from 'react';

const formValidator = ( state, action ) => { 
    
    console.log(action.payload.value);

      //we can determine the error here. Although it can also be done in the name function.  I believer this is what the validator function is intended for.
        switch (action.type) {
            case 'firstName':
                if ( action.payload.value.length === 0 || action.payload.value.length > 2) {
                    console.log('case one');
                    action.payload.error = '';
                }
                else {
                    console.log('case two');
                    console.log('length: ' + action.payload.value.length);
                    action.payload.error = 'Name must be at least 2 characters in length';
                }  
                break;
            case 'lastName':
                if ( action.payload.value.length === 0 || action.payload.value.length > 2) {
                    action.payload.error = '';
                }
                else {
                    action.payload.error = 'Name must be at least 2 characters in length';
                }   
                break;
            case 'email':
                if ( action.payload.value.length === 0 || action.payload.value.length > 8) {
                    action.payload.error = '';
                }
                else {
                    action.payload.error = 'Name must be at least 8 characters in length';
                }    
                break;
            default: action.payload.error = 'Something went wrong'; 
        }  

    //4. return the value
    return {
        ...state, //spread operator to copy the existing state in it's entirety.
        [action.type]: action.payload //set the desired value to what you want it to be.  
        //In this case action.type == firstname, lastname, or email
        //In this case action.payload == the attributes of that object.  value, and error.  
    }  
};


//2. set the initial state
const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

const Form = () => {    

    //3.
    //declare state and dispatch using the use reducer
    //state is set to initialState
    //dispatch will be sent to the formValidator function as the action
    const [state, dispatch] = useReducer(formValidator, initialState);   

    //This populates the action which we can then pass to formValidator
    const name = (e) => {
        const { name, value } = e.target; //This destructure will get the value and the id from the html element     
        const error = state[name].error;


        // //If I dont' initialize this the code bombs.
        // let error = '';
        
        // //we can determine the error here.
        // switch (name) {
        //     case 'firstName':
        //         if ( value.length === 0 || value.length > 2) {
        //             console.log('case one');
        //             error = '';
        //         }
        //         else {
        //             console.log('case two');
        //             console.log('length: ' + value.length);
        //             error = 'Name must be at least 2 characters in length';
        //         }  
        //         break;
        //     case 'lastName':
        //         if ( value.length === 0 || value.length > 2) {
        //             error = '';
        //         }
        //         else {
        //             error = 'Name must be at least 2 characters in length';
        //         }   
        //         break;
        //     case 'email':
        //         if ( value.length === 0 || value.length > 8) {
        //             error = '';
        //         }
        //         else {
        //             error = 'Name must be at least 8 characters in length';
        //         }    
        //         break;
        //     default: error = 'Something went wrong'; 
        // }        
       
        
        //4. dispatch will return the object to the validator function.  
        //In this case disbatch will return a nested objected where type will act as the key to make sure the return from the validator function goes to the right place.
        //this will dispatch the value and name to the formValidator function
        dispatch({value: value, 
                  type: name,  //will be firstname, lastname, or email in this example.
                  payload: { 
                      value,
                      error
                  }                                
        });  
    }

    //<div>{state.firstName.error}</div>
    return(
        <div>
            <form>
                <div className="Control">
                    <label className="label">First Name:</label>
                    <input name="firstName" type="text" onChange= { name } />
                    <div>{state.firstName.error}</div>
                </div>
                <div className="Control">
                    <label className="label">Last Name:</label>
                    <input name="lastName" type="text" onChange= { name } />
                    <div>{state.lastName.error}</div>                  
                </div>
                <div className="Control">
                    <label className="label">Email:</label>
                    <input name="email" type="text" onChange= { name } />
                    <div>{state.email.error}</div>
                </div>
                <input type="submit" value="Submit" className="btn_submit" />
            </form>
        </div>
    );
}

export default Form;