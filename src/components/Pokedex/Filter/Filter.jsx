import React, { useState, useContext } from "react";
import { PokeContext } from "../../../contexts/PokeContext";
import InputFilter from "../../Style/InputFilter";

const Filter = (props) => {

  const { filterState, setFilterState } = useContext(PokeContext);
  const handleFilterChange = (event) => {
    event.preventDefault()
    setFilterState((prevState) => ({...prevState, name: event.target.value}))
    console.log(event)
  }
  return (
    <React.Fragment>
      <form onSubmit={(event) => handleFilterChange(event)}>
        <InputFilter type='text' name='filterByName'/>
      </form>

    </React.Fragment>
    );
}

export default Filter;
