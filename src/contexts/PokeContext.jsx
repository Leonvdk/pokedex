import React,{createContext, useState, useEffect} from "react";
import axios from "axios";

export const PokeContext = createContext(null);

export default function AuthContextProvider(props) {
  const [pokeList, setPokeList] = useState({});

  useEffect(() => {
    axios
      .get()
  });

  return (
    <PokeContext.Provider value={{ pokeList, setPokeList }}>
      {props.children}
    </PokeContext.Provider>
  );
}