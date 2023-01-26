import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    //Note the second argument is an empty array.
    const [pokemon, setPokemon] = useState([]);

      var fetchData = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
            .then(res=>{
              console.log(res)
              setPokemon(res.data.results)
            })
            .catch((err)=>{console.log("This is my display page error: ", err)})
    }; 
    return(
        <div>
          <button onClick={fetchData}>Fetch</button>
          {
          pokemon.map((pokemon, i) => {
            return(
              <p key={i}>
                {pokemon.name}  
              </p>
              
            )
          })
          }
        </div>
    )
}



export default Pokemon


