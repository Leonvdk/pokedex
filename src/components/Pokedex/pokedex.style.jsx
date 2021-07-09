import styled from "styled-components";

export const PokedexMain = styled.div`
  display: grid;
  gird-template-areas:
  filter   filter   filter   pokelist
  pokeview pokeview pokeview pokelist
  pokeview pokeview pokeview pokelist
  pokeview pokeview pokeview pokelist
  pokeview pokeview pokeview pokelist
  ; 
`;

export const FilterContainer = styled.div`
  grid-area: filter;

`;

export const InputFilter = styled.input`
`;


export const PokeSelect = styled.div`
  height: 100vh;
  background-color: red;
  grid-area: pokelist;
  justify-self: flex-end;
  overflow-y: scroll;

`;

export const PokeOption = styled.div`
text-align: end;
font-family: futura, Times, serif;
font-size: 1.5em;
transition: all .7s;
cursor: pointer;
margin: 10px 20px 0 0;

&:hover{
  // transform: scale(1.05);
  // transform: translate(20px 0);

}
`;

