import React, { useState, useEffect, useContext } from "react";
import { PokeContext } from "../../../contexts/PokeContext";
import PokeCard from "../PokeCard/PokeCard";

function PokeListFiltered(props) {
  const { pokeList } = useContext(PokeContext);
  return (
    <React.Fragment>
      {pokeList.map((pokemon, index) => (
        <PokeCard pokemon={pokemon} key={index} />
      ))}
    </React.Fragment>
  );
}

export default PokeListFiltered;
