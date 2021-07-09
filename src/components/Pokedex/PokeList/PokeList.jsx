import React, { useState, useEffect, useContext } from "react";
import { PokeContext } from "../../../contexts/PokeContext";
import {PokeSelect, PokeOption} from "../pokedex.style";

function PokeListFiltered(props) {
  const { currentPokeList, pokeList, setCurrentPokeList } = useContext(PokeContext);

  const resetCurrentPokelist = () => {
    setCurrentPokeList(() => [...pokeList]);
  }

  useEffect(() => {
    resetCurrentPokelist();
  }, [])
  
  return (
    <PokeSelect size='20'>
      {currentPokeList.map((pokemon, index) => (
        <PokeOption value={pokemon} key={index}>
          {pokemon}
        </PokeOption>
      ))}
    </PokeSelect>
  );
}

export default PokeListFiltered;
