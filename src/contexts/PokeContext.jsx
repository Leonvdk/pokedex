import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const PokeContext = createContext(null);

export default function PokeContextProvider(props) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokeList, setPokeList] = useState([]);
  const [currentPokeList, setCurrentPokeList] = useState([]);
  const [types, setTypes] = useState([]);
  const [searchName, setSearchName] = useState("");

  const getAllPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151/`)
      .then((response) => {
        response.data.results.forEach((pokemon) => {
          setPokeList((prevPokeList) => [...prevPokeList, pokemon.name]);
        });
      });
  };

  useEffect(() => {
    setCurrentPokeList([...pokeList]);
  }, [pokeList]);

  const getAllTypes = () => {
    axios.get(`https://pokeapi.co/api/v2/type/`).then((response) => {
      setTypes([]);
      response.data.results.forEach((type) => {
        setTypes((prevTypes) => [...prevTypes, type.name]);
      });
    });
  };

  // Filtering visible pokémon selection list
  const filterByType = async (type) => {
    if (type === "all") {
      setCurrentPokeList([...pokeList]);
      setSearchName(pokeList[0]);
    } else {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/type/${type}`
      );
      try {
        const filterData = response.data.pokemon
          .filter((item) => pokeList.includes(item.pokemon.name))
          .map((item) => item.pokemon.name);
        setCurrentPokeList(filterData);
        setSearchName(filterData[0]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setPokeList([]);
    getAllPokemon();
    getAllTypes();
  }, []);

  useEffect(() => {
    setCurrentPokeList([...pokeList]);
  }, [pokeList]);

  useEffect(() => {
    const getPokemonByName = () => {
      searchName &&
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${searchName}/`)
          .then((response) => {
            setSelectedPokemon(response.data);
          });
    };
    getPokemonByName();
  }, [searchName]);

  return (
    <PokeContext.Provider
      value={{
        pokeList,
        setPokeList,
        searchName,
        setSearchName,
        types,
        filterByType,
        setCurrentPokeList,
        currentPokeList,
        selectedPokemon,
      }}
    >
      {props.children}
    </PokeContext.Provider>
  );
}

PokeContextProvider.propTypes = { children: PropTypes.any };
