import React from 'react';

function PokeCard(props) {
  return (
    <div>
      <p>{props.pokemon.name}</p>
    </div>
  );
}

export default PokeCard;