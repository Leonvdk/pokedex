import React, { useState, useEffect, useContext } from "react";
import { PokeContext } from "../../../contexts/PokeContext";
import {PokeSelect, PokeOption} from "./PokeList.style";

function PokeListFiltered(props) {
  const { pokeList } = useContext(PokeContext);
  return (
    <PokeSelect size='20'>
      {pokeList.map((pokemon, index) => (
        <PokeOption value={pokemon.name} key={index}>
          {pokemon.name}
        </PokeOption>
      ))}
    </PokeSelect>
  );
}

export default PokeListFiltered;
