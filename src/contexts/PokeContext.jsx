import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"

export const PokeContext = createContext(null);

export default function AuthContextProvider(props) {
  const [selectedPokemon, setSelectedPokemon] = useState({})
  const [pokeList, setPokeList] = useState([]);
  const [filterState, setFilterState] = useState({
    type: "flying",
    name: "",
  });

  let history = useHistory;

  const getPokemonByName = () => {
    let pokemon = filterState.name
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(response => console.log(response))
    .then(() => history.push(`/${selectedPokemon}`))
    .catch( alert(`${pokemon} is not one of the OG's`))
  }

  const getAllPokemon = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=151/`
      )
      .then(
        filterState.name
          ? (response) => console.log(response)
          : (response) =>
              response.data.results.forEach((pokemon) => {
                setPokeList((prevPokeList) => [...prevPokeList, pokemon]);
              })
      );
  };

  useEffect(
    getAllPokemon(), []

  )

  return (
    <PokeContext.Provider
      value={{ pokeList, setPokeList, filterState, setFilterState, getPokemonByName }}
    >
      {props.children}
    </PokeContext.Provider>
  );
}
