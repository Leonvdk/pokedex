import styled from "styled-components";
import pokeball from "../../Assets/Images/s_pokeball_pixel.png"
import { GlobalColors, BoxShadow, GradientBG } from "../../globalStyles"

export const PokedexMain = styled.div`
  height: 78vh;
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
  
  select{
    background-color: ${GlobalColors.green};
    font-family: eightbit;
    font-size: 2em
  }

  
  h4, h3{
    margin: 10px 0 5px 0;
  }
`;

export const InputFilter = styled.input`
  width: 200px;
  height: 30px;
  background-color: ${GlobalColors.green};
  font-family: eightbit;
  font-size: 2em
`;

export const PokeSelect = styled.div`
  height: 78vh;
  grid-area: pokelist;
  justify-self: flex-end;
  justify-content: flex-end;
  overflow-y: scroll;
  background-color: ${GlobalColors.green};
  scrollbar-color: ${GlobalColors.black} ${GlobalColors.green};
  color: ${GlobalColors.black};
  border: 3px solid ${GlobalColors.black};
  border-radius: 15px;
`;

export const PokeOption = styled.div`
  
  display: flex;
  text-align: start;
  align-items: center;
  font-family: 'eightbit', futura;
  font-size: 1.7em;
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
  ${BoxShadow} 
  font-family: 'eightbit', futura;
  font-size: 1.7em;

  h2{
    font-size: 30px;
  }

  h4{
    font-size: 25px;
    // align-self: flex-start;
    font-family: eightbit;
  }

  #height-weight{
    // display: flex;
    // justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
    p{
      margin: 10px 25px;
      font-weight: 500;
    }
  }

  #stats{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 0 20px ;
  }

`;

