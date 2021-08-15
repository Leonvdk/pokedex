import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { PokeContext } from "./PokeContext";
import { AuthContext } from "./AuthContext";
// import { config } from "../helpers/auth";

export const UserContext = createContext(null);

export default function UserContextProvider(props) {
  const { selectedPokemon, setCurrentPokeList, setSearchName } =
    useContext(PokeContext);
  const { user, auth } = useContext(AuthContext);

  //User is static for now
  const currentUser = user;

  const [userLists, setUserLists] = useState([]);
  const [myPokemon, setMyPokemon] = useState([]);

  const getAllLists = () => {
    if (auth) {
      axios.get(`http://localhost:1337/lists?user=${currentUser.id}`).then((response) => {
        console.log('resp: ',response.data);
        setUserLists(response.data.map((item) => item));
      });
    }
  };

  async function editListName(listId) {
    const newName = {};
    newName.listName = await prompt(
      'Enter new list name or type "delete" to delete this list'
    );
    newName.listName !== "" && newName.listName === "delete"
      ? axios
          .delete(`http://localhost:1337/lists/${listId}`, {})
          .then(() => getAllLists())
      : axios
          .put(`http://localhost:1337/lists/${listId}`, {
            listName: newName,
            users_permissions_user: currentUser.username,
          })
          .then(() => getAllLists());
  }

  const addToList = (listId) => {
    axios.post(`http://localhost:1337/pokes/`, {
      name: selectedPokemon.name,
      list: listId,
    });
    try {
      getPokemonInList(listId);
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonInList = (listId) => {
    axios
      .get(`http://localhost:1337/lists/${listId}/`)
      .then(async (response) => {
        setCurrentPokeList([]);
        const list = [];
        await response.data.pokes.map((pokemon) => {
          list.push(pokemon.name);
          return list;
        });
        setCurrentPokeList(list);
        setSearchName(list[0]);

        // setCurrentPokeList(prevList => [...prevList, response.data.map((pokemon) => (
        //   pokemon.pokemon_name
        // ))])
      });
  };

  async function createNewList() {
    const newList = {};
    newList.listName = await prompt("What will your list be called?");
    if (newList.listName !== null) {
      const response = await axios.post(`http://localhost:1337/lists/`, {
        users_permissions_user: currentUser.username,
        listName: newList.listName,
      });
      try {
        setUserLists([...userLists, response.data]);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    const getMyPokemon = async () => {
      const response = await axios.get(`http://localhost:1337/lists?user=${currentUser.id}`);
      try {
        console.log("xxx",response)
        setMyPokemon(response.data.map(item => console.log(item.pokes)));
      } catch (error) {
        console.log(error);
      }
    };
    getMyPokemon();
  }, [auth, currentUser.id]);

  useEffect(() => {
    getAllLists();
  }, [auth]);

  useEffect(() => {
    getAllLists();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userLists,
        setUserLists,
        addToList,
        editListName,
        createNewList,
        getPokemonInList,
        myPokemon,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = { children: PropTypes.any };
