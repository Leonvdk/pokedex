import React, { useState, useEffect, useContext } from "react";
import { PokeContext } from "../../../contexts/PokeContext";
import PokeCard from "../PokeCard/PokeCard";

function PokeListFiltered(props) {
  const { pokeList } = useContext(PokeContext);
  return (

      <select>
        {pokeList.map((pokemon, index) => (
          <option value={pokemon.name} key={index} >{pokemon.name}</option>
        ))}
      </select>
  );
}

export default PokeListFiltered;
