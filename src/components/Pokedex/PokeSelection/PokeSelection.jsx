import React, { useEffect, useContext } from "react";
import { PokeContext } from "../../../contexts/PokeContext";
import { UserContext } from "../../../contexts/UserContext";
import {PokeSelect, PokeOption} from "../pokedex.style";



function PokeSelection() {
  const { myPokemon } = useContext(UserContext)
  const { currentPokeList, pokeList, setCurrentPokeList, setSearchName } = useContext(PokeContext);

  
  useEffect(() => {
    const resetCurrentPokelist = () => {
      setCurrentPokeList(() => [...pokeList]);
    }
    resetCurrentPokelist();
  }, [pokeList, setCurrentPokeList])
  
  return (
      <PokeSelect >
        {currentPokeList.map((pokemon, index) => (
          <PokeOption value={pokemon} key={index} className={`${myPokemon.includes(pokemon)? "got-it": ""}`} onClick={(event) => {
            setSearchName(event.target.innerHTML)
          }
          }>
            {pokemon}
          </PokeOption>
        ))}
      </PokeSelect>
  );
}

export default PokeSelection;
