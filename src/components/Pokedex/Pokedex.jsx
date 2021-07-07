import React, { useState, useEffect, useContext } from 'react';
import Filter from './Filter/Filter';

function Pokedex(props) {

  const [state, setState] = useState({
    pokemon:{},
  })

  return (
    <div>
      <Filter />
    </div>
  );
}

export default Pokedex;