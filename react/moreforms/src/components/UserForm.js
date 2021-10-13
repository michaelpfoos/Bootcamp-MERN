import React, { useState } from 'react';

const UserForm = (props) => {    
    const [firstNameValidation, setFirstNameValidation] = useState("");
    const [lastNameValidation, setLastNameValidation] = useState("");    
    const [emailValidation, setEmailValidation] = useState("");
    const [passwordValidation, setPasswordValidation] = useState("");
    const [storePassword, setStoredPassword] = useState("");
    const [confirmPasswordValidation, setConfirmPasswordValidation] = useState("");

    //validate first name
    /*
    const validateFirstName = (e) => {
        if (e.target.value.length === 0) {
            setFirstNameValidation("");
        }
        else if (e.target.value.length < 2) {
            setFirstNameValidation("Field must be at least 2 characters");
        }
        else {
            setFirstNameValidation("");
        }
    }
    */

    //validate last name
    const validateLastName = (e) => {
        if (e.target.value.length === 0) {
            setLastNameValidation("");
        }
        else if (e.target.value.length < 2) {
            setLastNameValidation("Field must be at least 2 characters");
        }
        else {
            setLastNameValidation("");
        }
    }

    //validate email
    const validateEmail = (e) => {
        if (e.target.value.length === 0) {
            setEmailValidation("");
        }
        else if (e.target.value.length < 5) {
            setEmailValidation("Email must be at least 5 characters")
        }
        else {
            setEmailValidation("");
        }
    }

    //validate password
    const validatePassword = (e) => {
        if (e.target.value.length === 0) {
            setPasswordValidation("");
        }
        else if (e.target.value.length < 8) {
            setPasswordValidation("Password must be at least 8 characters");
        }
        else {
            setPasswordValidation("");
            setStoredPassword(e.target.value);
        }        
    }

    //validate confirm password
    const validateConfirmPassword = (e) => {
        if (e.target.value.length === 0) {
            setConfirmPasswordValidation("");
        }
        else if (e.target.value.length < 8) {
            setConfirmPasswordValidation("Password must be at least 8 characters");
        }
        else if (e.target.value !== storePassword) {
            setConfirmPasswordValidation("Passwords must match");
        }
        else {
            setConfirmPasswordValidation("");
        }
    }


    return(
        <div>            
            <form className="form">
                <div className="inputContainer">
                    <label>First Name: </label>
                    <input type="text" onChange={ (e) => setFirstNameValidation(e.target.value) } />                                    
                </div>
                {
                        firstNameValidation.length > 0 && firstNameValidation.length < 3 ?
                        <p>Field must be at least 2 characters</p> :
                        null
                }  
                <div className="inputContainer">
                    <label>Last Name: </label>
                    <input type="text" onChange={ validateLastName } />  
                </div>
                {
                        lastNameValidation ?
                        <p>{ lastNameValidation }</p> :
                        ''
                }  
                <div className="inputContainer">
                    <label>Email: </label>
                    <input type="text" onChange={ validateEmail } />
                </div>
                {
                        emailValidation ?
                        <p>{ emailValidation }</p> :
                        ''
                }  
                <div className="inputContainer">
                    <label>Password: </label>
                    <input type="password" onChange={ validatePassword } />
                </div>
                {
                        passwordValidation ?
                        <p>{ passwordValidation }</p> :
                        ''
                }  
                <div className="inputContainer">
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ validateConfirmPassword} />
                </div>
                {
                        confirmPasswordValidation ?
                        <p>{ confirmPasswordValidation }</p> :
                        ''
                }  
            </form>

        </div>
    );
}

export default UserForm;