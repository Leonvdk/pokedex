import React from "react";
// import { PokeContext } from '../../contexts/PokeContext'
import Filter from "./Filter/Filter";
import PokeList from "./PokeList/PokeList";

function Pokedex(props) {
  // const { pokeList } = useContext(PokeContext);

  return (
    <React.Fragment>
      <Filter />
      <PokeList />
    </React.Fragment>
  );
}

export default Pokedex;
