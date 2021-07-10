import React, { useState, useEffect, useContext, Fragment } from "react";
import { PokeContext } from "../../../contexts/PokeContext";
import { PokeViewContainer } from '../pokedex.style'

function PokeView(props) {

  const { selectedPokemon } = useContext(PokeContext);

  return (
    <Fragment>
      {selectedPokemon&&
        <PokeViewContainer>
          <img src={selectedPokemon.sprites.front_default} alt="" height='200px' width='200px'/>
          <h3>{selectedPokemon.name}</h3>
          <p>Height: {selectedPokemon.height}</p>
          <p>Weight: {selectedPokemon.weight}</p>
          <h5>Stats:</h5>
          {selectedPokemon.stats.map((stat)=> (
            <p name='base-stat'>{stat.stat.name}: {stat.base_stat}</p>
          ))}
        </PokeViewContainer>
      }
    </Fragment>

  
  );
}

export default PokeView;