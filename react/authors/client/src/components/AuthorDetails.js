import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const AuthorDetails = (props) => {

    const { _id } = props;
    const [authorName, setAuthorName] = useState('');
    const [genre, setGenre] = useState('');
    const [error, setError] = useState('');
    const [formStyle, setFormStyle] = useState({ display: 'block' }); 
    const [formDisabled, setFormDisabled] = useState(false);
    //const [validateID, setValidateID] = useState('');    

    useEffect(()=>{

        if (_id) {
            const url = `http://linuxhome:8000/api/authors/${_id}`;
            
            axios.get(url)
            .then(res=>{
                setAuthorName(res.data[0].name);
                setGenre(res.data[0].genre);
            })
            .catch(err=>{
                console.log(err);
                setFormStyle({ display: 'none' });
                setFormDisabled(true);
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const postData = (e) => {
        e.preventDefault();

        const data = {
            name: authorName,
            genre: genre
        };

        if (_id) {
            const url = `http://linuxhome:8000/api/authors/${_id}`;             
    
            axios.put(url, data)
            .then((res)=> {               
                navigate(`/`);          
            })
            .catch((err)=> {
                // setError(err.response.data.errors.name.message); //this code works but you have ot know the name of the key, in this case it's name.                 
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data                    
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)                   
                }
                // Set Errors
                setError(errorArr);      
            });             
        } 

        else {
            const url = 'http://linuxhome:8000/api/authors/new/';          
    
            axios.post(url, data)
            .then((res)=> {          
                navigate(`/`);  
            })
            .catch((err)=> {               
                // setError(err.response.data.errors.name.message); //this code works but you have ot know the name of the key, in this case it's name.                 
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data                    
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)                   
                }
                // Set Errors
                setError(errorArr);                       
            });            
        }
    }

    return (
        <div>
            {(formDisabled === true)
             ? <p>We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database? <Link to="/new">Add a New Author</Link></p>
               
             : null}
            <form onSubmit={postData} style={formStyle} className="mt-3 border border-secondary border-1 p-3">
                <label className="form-label">Name: </label>
                <input type="text" value={authorName} onChange={ (e)=> setAuthorName(e.target.value) } className="form-control" />
                <p className="text-danger">{error}</p>
                <label className="form-label">Genre: </label>
                <input type="text" value={genre} onChange={ (e)=> setGenre(e.target.value) } className="form-control" />               
                <button className="btn btn-primary mt-3 me-3" type="submit">Submit</button>
                <button className="btn btn-primary mt-3" type="button">Cancel</button>
            </form>
        </div>
    );
}

export default AuthorDetails;