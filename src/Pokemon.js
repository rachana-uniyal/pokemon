import { Grid } from "@material-ui/core";
import "./pokemon.css";

export default function Pokemon({ pokemon }) {
  // const [pokemon, setPokemon] = useState([]);

  // const URL = props.pokemonData.map((element) => element["url"]);
  // console.log(props.pokemonData);
  // console.log(Object.values(props.pokemonData));
  // console.log(URL);

  // fetchPokemon(URL[0]);

  // function fetchPokemon(url) {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((pokemon) => {
  //       console.log(pokemon.name);
  //       // setPokemon(pokemon);
  //     });
  // }

  //   return (
  //     <div>
  //       <PokemonList pokemons={props.pokemonData} />
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="gridContainer">
        {/* <div className={classes.grid}> */}
        <div>
          <div
          // className="pokeType"
          // style={{ backgroundColor: pokeColor[pokemon.name] }}
          >
            <img
              className="pokeImage"
              src={pokemon.sprites.front_default}
              alt="pokemon"
            />

            <Grid container>
              <Grid item xs={6}>
                <div className="pokeName">{pokemon.name}</div>
              </Grid>
              <Grid item xs={6}>
                <div className="pokeOwned">
                  <div>
                    # <span>{pokemon.order}</span>
                  </div>
                </div>
              </Grid>
            </Grid>

            <div className="pokeTypes">
              {pokemon.types.map((type, i) => {
                return (
                  <div className="pokeSkill" key={i}>
                    {type.type.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
