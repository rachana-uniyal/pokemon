
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Pokemon({ pokemon }){
  return (
    <Card sx={{ maxWidth: 300 }} >
      <CardMedia
        component="img"
        width='150px'
        height='auto'
        image={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
        alt="pokemon"
      />
      <CardContent style={{backgroundColor: 'white'}}>
        <Typography gutterBottom variant="h5" component="div" style={{backgroundColor: 'white'}}>
        {pokemon.name[0].toUpperCase()+ pokemon.name.slice(1)}
        </Typography>
        <Typography variant="h6" color="text.secondary" style={{backgroundColor: 'white'}}>
        <div style={{backgroundColor: 'white'}}>
              <span style={{backgroundColor: 'white'}}> Skills : </span>
              {pokemon.types.map((type, i) => {
                return (
                  <div style={{backgroundColor: 'white'}} key={i}>
                    {type.type.name}
                  </div>
                );
              })}
            </div>
        </Typography>
      </CardContent>
    </Card>
  );
}


