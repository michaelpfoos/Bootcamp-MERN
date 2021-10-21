import react, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosPokemonAPI = (props) => {

    const [pokemon, setPokemon] = useState([]);

    //Leaving fetch from previous assignment because it's good to comapre the two.
    // useEffect(()=>{
    //     const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=2000'

    //     fetch(apiUrl)
    //         .then(results => results.json())
    //         .then(json => {
    //             console.log(json.results);
    //             setPokemon(json.results);
    //         })
    //     .catch((err)=>console.log(err))
    // }, []) 
    
    useEffect(()=>{
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=2000'

        axios.get(apiUrl)
            .then(response=>setPokemon(response.data.results))           
        .catch((err)=>console.log(err))
    }, [])  


    return (
        <div className="container">
            <h1>Lets test an API</h1>
            <ul>
            {
                pokemon.map((pokemon, index) => 
                    <div>
                        <li>{pokemon.name}</li>                                             
                    </div>
                )
            }   
            </ul>
        </div>
    );


}
export default AxiosPokemonAPI;


