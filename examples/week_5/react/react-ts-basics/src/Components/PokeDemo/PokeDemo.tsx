import { useEffect, useState } from "react";
import type { Pokemon } from "./Pokemon";
import axios from "axios";

function PokeDemo() {

    let [pokemon] = useState<Pokemon>({} as Pokemon);

//   useEffect(() => {
//     async function getDitto() {
//       let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//       let responseBody = await response.json();

//       console.log(responseBody);
//       setPokemon(responseBody);
//     }

//     getDitto();
//   }, []);

    useEffect(() => {

        let data = {}
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        axios.post("https://jsonplaceholder.typicode.com/posts", data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
            
    }, []);


  return (
    <>
        {
            pokemon.abilities ? pokemon.abilities.map((obj, index) => {
                return (
                    <h3 key={index}>{obj.ability.name}</h3>
                )
            }) : <h2>Loading</h2>
        }
    </>
  ) ;
}

export default PokeDemo;
