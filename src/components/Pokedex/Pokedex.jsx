import React from "react";
// import { PokeContext } from '../../contexts/PokeContext'
import Filter from "./Filter/Filter";
import PokeList from "./PokeList/PokeList";
import PokeView from "./PokeView/PokeView";

function Pokedex(props) {
  // const { pokeList } = useContext(PokeContext);

  return (
    <Pokedex>
      <Filter />
      <PokeList />
      <PokeView />
    </Pokedex>
  );
}

export default Pokedex;
