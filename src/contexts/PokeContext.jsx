import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"

export const PokeContext = createContext(null);

export default function PokeContextProvider(props) {
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [pokeList, setPokeList] = useState([]);
  const [currentPokeList, setCurrentPokeList] = useState([]);
  const [types, setTypes] = useState([]);
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
  };

  const getAllPokemon = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=151/`
      )
      .then(
        (response) => {
          response.data.results.forEach((pokemon) => {
            setPokeList((prevPokeList) => [...prevPokeList, pokemon.name]);
          })
          console.log('currentPokeList: ', currentPokeList)
        }
      )
  };

  const getAllTypes = () => {
    axios
      .get(
        `https://pokeapi.co/api/v2/type/`
      )
      .then(
        (response) => 
          response.data.results.forEach((type) => {
            setTypes((prevTypes) => [...prevTypes, type.name]);
          })
      );
  };

  // Filtering visible pokémon list

  const filterByType = (type) => {
    type === 'all'
    ? setCurrentPokeList([...pokeList])
    :

    axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    .then(response => {
      console.log('response: ',response.data.pokemon)
      console.log('pokelist: ', pokeList)
      console.log('current: ', currentPokeList)
      response.data.pokemon.forEach(item => {
        pokeList.includes(item.pokemon.name)&& setCurrentPokeList((currentList) => [...currentList, item.pokemon.name])
      })
    })

  }

  useEffect(() => {
    setPokeList([])
    getAllPokemon()
    getAllTypes()
  }, [])

  return (
    <PokeContext.Provider
      value={{ pokeList, setPokeList, filterState, setFilterState, getPokemonByName, types, filterByType, setCurrentPokeList, currentPokeList }}
    >
      {props.children}
    </PokeContext.Provider>
  );
}
