import { useEffect, useState } from "react";

import Pokemon from "./Pokemon";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, isLoading] = useState(true)
  const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=1118";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(apiURL);
      await loadPokemon(response.results);
      isLoading(false)
      console.log(response);
    }
    fetchData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonGet = await getPokemon(pokemon);
        return pokemonGet;
      })
    );
    setPokemonData(_pokemonData);
  };

  const getPokemon = ({ url }) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        });
    });
  };

  const getAllPokemon = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        });
    });
  };

return (
    <div>
      <div className='App-header'><h1>Pokemons</h1></div>
    <div >
    {loading 
      ? <h1>Loading...</h1> 
      : <div className='gridContainer'>{pokemonData.map((pokemon, i) => {
                return <Pokemon key={i} pokemon={pokemon} />
              })} </div>
    }
      </div>
      </div>
)
 }

export default App;
