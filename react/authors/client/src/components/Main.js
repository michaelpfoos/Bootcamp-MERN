import React, { useEffect, useState } from 'react';
import styles from './Main.module.css';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import { navigate}  from '@reach/router';


const Main = () => {  
    
    //This will eventually be passed down via a prop
    const baseUrl = 'http://linuxhome:8000/api/authors/';
    
    const [authors, setAuthors] = useState([]);
    const [reload, setReload] = useState(false);       

    useEffect(()=>{
        axios.get(baseUrl)  
        .then(res=>{          
            //Althoug there is temptation to sort this on the back end that is not the right way to do it.  
            //Sorting of data should alaways be passed on to the client, not the server.
            let sortAuthors = res.data;             
            sortAuthors.sort((a, b) => (a.name > b.name) ? 1 : -1)   //https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
            setAuthors(sortAuthors);                     
        });        
    },[reload]) 

    const navigateToEdit = (id) => {       
        navigate(`/edit/${id}`);        
    }

    return(
        <div>
            <div className="container">
                <div className="row alternateBackground">
                    <div className="col-4 border border-dark border-2">
                        <h2 className="text-white">Author</h2>
                    </div>
                    <div className="col border border-dark border-2">
                        <h2 className="text-white">Actions available</h2>
                    </div>
                </div>               
                {/*Begin Mapping here*/} 
                {authors.map((author, index)=>{
                    return (
                        <div key={index} className={(index % 2 === 0 && index !== 1) ? "row bg-light" : "row alternateBackground"}>
                            <div className="col-4 border border-dark border-2">
                                <div className="d-flex align-items-center cx-height-3">
                                    <div>
                                        <p className="mb-0 mt-3"><span className="fw-bold">Name: </span>{author.name}</p>
                                        <p><span className="fw-bold">Genre: </span> {author.genre}</p>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="col border border-dark border-2">
                                <div className={styles.buttonContainer}>
                                    <button onClick={ () => navigateToEdit(author._id) } className={styles.buttonEdit}>Edit</button>
                                    <DeleteButton _id={author._id} reload={reload} setReload={setReload} styling={styles.buttonDelete} />                                   
                                </div>
                            </div>
                        </div>
                    )                   
                })}               
            </div>              
        </div>
    );
}

export default Main;