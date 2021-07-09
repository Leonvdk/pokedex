import React from "react";
// import { PokeContext } from '../../contexts/PokeContext'
import Filter from "./Filter/Filter";
import PokeList from "./PokeList/PokeList";
import PokeView from "./PokeView/PokeView";
import { PokedexMain } from "./pokedex.style"

function Pokedex(props) {
  // const { pokeList } = useContext(PokeContext);

  return (
    <PokedexMain>
      <Filter />
      <PokeList />
      <PokeView />
    </PokedexMain>

  );
}

export default Pokedex;
