import React from 'react';
// import { PokeContext } from '../../contexts/PokeContext'
import Filter from './Filter/Filter';
import PokeListFiltered from './PokeListFiltered/PokeListFiltered';


function Pokedex(props) {

  // const { pokeList } = useContext(PokeContext);

  return (
    <React.Fragment>
      <Filter />
      <PokeListFiltered />
    </React.Fragment>
  );
}

export default Pokedex;