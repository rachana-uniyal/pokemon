import React,{ useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Pokemon from "./Pokemon";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const currentPageUrl = "https://pokeapi.co/api/v2/pokemon?limit=100";
  const pokemonPerPage = 20;
  const pagesVisited = pageNumber * pokemonPerPage;

  
  useEffect(() => {
    async function fetchData() {
      document.title = 'Pokemons';
      let response = await getAllPokemon(currentPageUrl);
      await loadPokemon(response.results);
      setLoading(false)
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
          console.log("data in getAllPokemon",data)
          resolve(data);
        });
    });
  };
  
  const displayPokemons = pokemonData
                    .slice(pagesVisited, pagesVisited+pokemonPerPage)
                    .map((pokemon, i) => {
                      return <Pokemon key={i} pokemon={pokemon} />
                    })

  const pageCount = Math.ceil(pokemonData.length / pokemonPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

return (
    <div>
      <div className='App-header'><h1>Pokemons</h1></div>
    <div >
    {loading 
      ? <h1>Loading...</h1> 
      : 
        <div className='gridContainer'>{displayPokemons}
      <nav aria-label="Page navigation example">
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={changePage}
        containerClassName={"pagination justify-content-end"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
      </nav>
      </div>
    }
      </div>
      </div>
)
 }

export default App;


