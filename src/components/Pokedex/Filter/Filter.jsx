import React, { useState, useContext } from "react";
import { PokeContext } from "../../../contexts/PokeContext";
import { FilterContainer, InputFilter } from "../pokedex.style";
import { H3 } from "../../../globalStyles";


const Filter = (props) => {
  const { setSearchName, types, filterByType, getPokemonByName } = useContext(PokeContext);
  
  const [input, setInput] = useState('')


  return (
    <FilterContainer>
      <form onSubmit={(event) => {
        event.preventDefault() 
        setSearchName(input)}}>
        <InputFilter type="text" name="filterByName" placeholder='Find your Pokeleon' onChange={(event)=> setInput(event.target.value.toLowerCase())} />
      </form>
      <h4>Types</h4>
      <form>
        <select onChange={(event)=>filterByType(event.target.value)}>
        <option name='all' id='all-type' value='all'>All</option>
          {types.map((type) => (
              <option name={type} id={type + '-type'} value={type}>{type}</option>
          ))}
        </select>
      </form>
    </FilterContainer>
  );
};

export default Filter;
