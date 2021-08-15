import React from "react";
// import { PokeContext } from '../../contexts/PokeContext'
import Filter from "./Filter/Filter";
import PokeList from "./PokeSelection/PokeSelection";
import PokeView from "./PokeView/PokeView";
import { PokedexMain } from "./pokedex.style"
import UserLists from "./UserLists/UserLists";

function Pokedex() {
  // const { pokeList } = useContext(PokeContext);

  return (
    <PokedexMain>
      <Filter />
      <PokeView />
      <PokeList />
      <UserLists />
    </PokedexMain>

  );
}

export default Pokedex;
