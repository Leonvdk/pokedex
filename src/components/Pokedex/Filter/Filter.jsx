import React, { useState, useContext } from "react";
import { PokeContext } from "../../../contexts/PokeContext";
import { FilterContainer, InputFilter } from "../pokedex.style";
import { H3 } from "../../../globalStyles";


const Filter = (props) => {
  const { filterState, setFilterState, types, filterByType } = useContext(PokeContext);
  const handleFilterChange = (event) => {
    event.preventDefault();
    setFilterState((prevState) => ({ ...prevState, name: event.target.value }));
    console.log(event);
  };
  return (
    <FilterContainer>
      <form onSubmit={(event) => handleFilterChange(event)}>
        <InputFilter type="text" name="filterByName" />
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
