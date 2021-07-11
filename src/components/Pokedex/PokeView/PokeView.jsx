import React, { useState, useEffect, useContext, Fragment } from "react";
import { PokeContext } from "../../../contexts/PokeContext";
import { PokeViewContainer } from '../pokedex.style'

function PokeView(props) {

  const { selectedPokemon } = useContext(PokeContext);

  return (
      <PokeViewContainer>
        {selectedPokemon&&
        <Fragment>
          <img src={selectedPokemon.sprites.front_default} alt="" height='200px' width='200px'/>
          <h2>{selectedPokemon.name}</h2>
          <div id='height-weight'>
            <p>Height: {selectedPokemon.height}</p>
            <p>Weight: {selectedPokemon.weight}</p>
          </div>
          <div>
            <h4>Stats:</h4>
            <div id='stats'>
              {selectedPokemon.stats.map((stat)=> (
                <p name='base-stat'>{stat.stat.name}: {stat.base_stat}</p>
              ))}
            </div>
          </div>
        </Fragment>
          }
        </PokeViewContainer>

  
  );
}

export default PokeView;