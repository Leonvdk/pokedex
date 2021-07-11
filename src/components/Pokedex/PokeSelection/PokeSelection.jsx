import React, { useState, useEffect, useContext } from "react";
import { PokeContext } from "../../../contexts/PokeContext";
import {PokeSelect, PokeOption} from "../pokedex.style";



function PokeSelection(props) {
  const { currentPokeList, pokeList, setCurrentPokeList, setSearchName } = useContext(PokeContext);

  const resetCurrentPokelist = () => {
    setCurrentPokeList(() => [...pokeList]);
  }

  useEffect(() => {
    resetCurrentPokelist();
  }, [])


  
  return (
      <PokeSelect >
        {currentPokeList.map((pokemon, index) => (
          <PokeOption value={pokemon} key={index} className='my-pokemon' onClick={(event) => {
            setSearchName(event.target.innerHTML)
          }
          }>
            {pokemon}
          </PokeOption>
        ))}
      </PokeSelect>
  );
}

export default PokeSelection;
