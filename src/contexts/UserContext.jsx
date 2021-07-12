import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { PokeContext } from "./PokeContext";

export const UserContext = createContext(null);

export default function UserContextProvider(props) {

  const { selectedPokemon, setCurrentPokeList, setSearchName } = useContext(PokeContext);

  //User Id is static for now
  const userId = 1;

  const [ userLists, setUserLists ] = useState([]);

  const getAllLists = () => {
    axios.get(`http://localhost:5000/lists/all/${userId}/`)
    .then(response => {
      console.log('response data', [...response.data])
      setUserLists([...response.data])
    })
  }



  async function editListName (listId) {
    const newName = {}
    newName.listName = await prompt('Enter new list name or type "delete" to delete this list')
    newName.listName !== ''&& 
      newName.listName === 'delete'
      ?
      axios.delete(`http://localhost:5000/lists/${userId}/${listId}`)
      .then((response) => setUserLists([...response.data]))
      :
      axios.put(`http://localhost:5000/lists/${userId}/${listId}`, newName)
      .then((response) => setUserLists([...response.data]))
  };

  const addToList = (listId) => {
      axios.post(`http://localhost:5000/pokemon/${listId}/${selectedPokemon.name}/`)
      .then((response) => console.log([...response.data]))
  };

  const getPokemonInList = (listId) => {
    axios.get(`http://localhost:5000/pokemon/${listId}/`)
    .then(async (response) => {
      setCurrentPokeList([])
      const list = [];
      const newList = await response.data.map((pokemon) => {
        list.push(pokemon.pokemon_name)
        return list;
    })
    setCurrentPokeList(list);
    setSearchName(list[0])


      // setCurrentPokeList(prevList => [...prevList, response.data.map((pokemon) => (
      //   pokemon.pokemon_name
      // ))])
    }
    )
  }

  async function createNewList () {
    const newList = {}
    newList.listName = await prompt('What will your list be called?')
    newList.listName !== null&& 
      axios.post(`http://localhost:5000/lists/${userId}/${newList.listName}`)
      .then((response) => setUserLists([...response.data]))
  }

  useEffect(() => {

  }, [])

  useEffect(() => {
    getAllLists()
  }, [])


  return (
    <UserContext.Provider
      value={{ userLists, setUserLists, addToList, editListName, createNewList, getPokemonInList}}
    >
      {props.children}
    </UserContext.Provider>
  );
}
