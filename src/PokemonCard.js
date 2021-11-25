import { Card } from "react-bootstrap";

const imgSize = { width: "250px", height: "250px" };

export default function PokemonCard(props) {
  let url = "";
  fetch(props.pokemon.url)
    .then((response) => response.json())
    .then((pokedata) => (url = pokedata.sprites.front_default));

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img style={imgSize} variant="top" src={url} />
      <Card.Body>
        <Card.Title>
          {props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}
        </Card.Title>
        <Card.Text>{props.pokemon.form}</Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}
// <Card style={{ width: "18rem" }}>
//   <Card.Img
//     style={imgSize}
//     variant="top"
//     src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}
//   />
//   <Card.Body>
//     <Card.Title>
//       {props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}
//     </Card.Title>
//     <Card.Text>{props.pokemon.form}</Card.Text>
//     {/* <Button variant="primary">Go somewhere</Button> */}
//   </Card.Body>
// </Card>
