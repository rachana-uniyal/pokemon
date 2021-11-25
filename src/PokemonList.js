import PokemonCard from "./PokemonCard";
import "./pokemonList.css";

export const PokemonList = (props) => (
  <div className="grid-container">
    {props.pokemons.map((pokemon) => (
      <PokemonCard
        className="grid-item"
        key={pokemon["name"]}
        pokemon={pokemon}
      ></PokemonCard>
    ))}
  </div>
);
