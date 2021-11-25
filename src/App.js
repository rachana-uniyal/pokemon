import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Pokemon from "./Pokemon";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=20";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(apiURL);
      await loadPokemon(response.results);
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
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          component={pokemonData.map((pokemon, i) => {
            return <Pokemon key={i} pokemon={pokemon} />;
          })}
        />
      </Routes>
    </Router>
  );
}

export default App;
