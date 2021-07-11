import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokeContext = createContext(null);

export default function PokeContextProvider(props) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokeList, setPokeList] = useState([]);
  const [currentPokeList, setCurrentPokeList] = useState([]);
  const [types, setTypes] = useState([]);
  const [searchName, setSearchName] = useState('');

  const getPokemonByName = (event) => {

    event&& event.preventDefault();
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${searchName}/`)
    .then(
      response => {setSelectedPokemon(response.data)}
    )
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
          setCurrentPokeList([...pokeList])
          console.log('pokeListaaaa: ', pokeList)
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
        (response) =>{ 
          response.data.results.forEach((type) => {
            setTypes((prevTypes) => [...prevTypes, type.name]);
          })
        }
      );
  };

  // Filtering visible pokémon selection list
  const filterByType = (type) => {
    type === 'all'
    ? setCurrentPokeList([...pokeList])
    :
    setCurrentPokeList([])
    axios.get(`https://pokeapi.co/api/v2/type/${type}`)
    .then(response => {
      // console.log('response: ',response.data.pokemon)
      // console.log('pokelist: ', pokeList)
      // console.log('current: ', currentPokeList)
      response.data.pokemon.forEach(item => {
        pokeList.includes(item.pokemon.name)&& setCurrentPokeList((currentList) => [...currentList, item.pokemon.name])
      })
    })

  }

  useEffect(() => {
    setPokeList([])
    getAllPokemon()
    getAllTypes()
  }, []);

  useEffect(() => {
    setCurrentPokeList([...pokeList])
  }, [pokeList])

  useEffect(() => {
    getPokemonByName()
  }, [searchName])

  return (
    <PokeContext.Provider
      value={{ pokeList, setPokeList, searchName, setSearchName, getPokemonByName, types, filterByType, setCurrentPokeList, currentPokeList, selectedPokemon}}
    >
      {props.children}
    </PokeContext.Provider>
  );
}
