import styled from "styled-components";
import pokeball from "../../Assets/Images/s_pokeball_pixel.png"
import { GlobalColors } from '../../globalStyles';


export const PokedexMain = styled.div`
  height: 100vh;
  padding: 20px;
  display: grid;
  grid-template-areas:

  'pokeview pokeview pokeview pokelist'
  'pokeview pokeview pokeview pokelist'
  'filter   filter   filter   pokelist'
  '  .         .        .     pokelist'; 
`;

export const FilterContainer = styled.div`
  grid-area: filter;
  padding: 20px;

`;

export const InputFilter = styled.input`
`;

export const PokeSelect = styled.div`
  height: 100vh;
  grid-area: pokelist;
  justify-self: flex-end;
  justify-content: flex-end;
  overflow-y: scroll;
  background-color: ${GlobalColors.green};
  scrollbar-color: ${GlobalColors.black} ${GlobalColors.green};
  color: ${GlobalColors.black};
  border: 3px solid ${GlobalColors.black};
  border-radius: 10px;
`;

export const PokeOption = styled.div`
  
  display: flex;
  text-align: start;
  align-items: center;
  font-family: futura, Times, serif;
  font-size: 1.5em;
  transition: all .4s;
  cursor: pointer;
  margin: 10px 20px;
  position: relative;

  &:hover{
    transform: scale(1.1) translate(8px);
  }
  &.my-pokemon::after{
    display: block;
    content: url(${pokeball});
    margin: -2px 5px auto 5px;
  }
`;

export const PokeViewContainer = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
  align-items: center;
  grid-area: pokeview ;
  background-color: #333;
  color: #EDECDD;
  border-radius: 10px;
  border: 3px solid #777;
  padding: 20px;
  margin: 20px;

`;

