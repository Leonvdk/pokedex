import styled from "styled-components";
import pokeball from "../../Assets/Images/s_pokeball_pixel.png"
import { GlobalColors, BoxShadow, GradientBG } from "../../globalStyles"

export const PokedexMain = styled.div`
  height: 78vh;
  padding: 20px;
  display: grid;
  grid-template-areas:
  'pokeview pokeview pokeview  pokelist'
  'pokeview pokeview pokeview  pokelist'
  'filter   filter   userLists pokelist'
  '  .         .        .      pokelist'; 

  UserLists{
    grid-area: userLists
  }

`;

export const FilterContainer = styled.div`
  grid-area: filter;
  padding: 20px;
  
  select{
    height: 25px;
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

// Screen where pokemon appear
export const PokeViewContainer = styled.div`
  height: 400px;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: pokeview ;
  background-color: #333;
  color: #EDECDD;
  border-radius: 10px;
  border: 3px solid #777;
  ${BoxShadow} 
  font-family: 'eightbit', futura;
  font-size: 1.7em;
  

  h2{
    font-size: 30px;
  }

  h4{
    font-size: 25px;
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

// List Elements ---------------------------------


export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(50px, 1fr));
  grid-gap: 5px  10px;
  padding: 20px;
`;

export const List = styled.div`
  height: 25px;
  padding: 5px 10px;
  align-items: center;
  font-size: 20px;
  background-color: ${GlobalColors.blue};
  color: ${GlobalColors.black} ;
  text-decoration: none;
  border: 3px solid #333;
  border-radius: 25px;
  display: grid;
  grid-template-areas: 'buttonText buttonText add';
  box-shadow: 3px 3px 0px 3px rgb(3,3,3,.4);
  transition: all .2s ease-out;
  position: relative;

  &:hover{
    transform: translate(2px);
    box-shadow: 1px 1px 0px 1px rgb(3,3,3,.4);
  }

`;


export const ListButton= styled.button`
position: absolute;
z-index: 9;
font-size: 40px;
font-weight: 600;
line-height: 1px;
background-color: rgb(0,0,0,0);
border: none;
box-shadow: none


align-self: center;
justify-self: center;
align-content: center;
justify-content: center;
align-text: center;
cursor: pointer;
transition: all .7s ease-out;

  &:hover{
    transform: scale(1.1) translate(-1px);
  }

  &.add{
    color: ${GlobalColors.green};
    text-shadow: 1px 1px 0px green;
    grid-area: add;

    &:hover{
      color: ${GlobalColors.green};
      text-shadow: 1px 1px 10px green;
    }
  }

  &.remove{
    color: ${GlobalColors.red};
    text-shadow: 1px 1px 0px #961112;
    grid-area: remove;

    &:hover{
      color: ${GlobalColors.red};
      text-shadow: 1px 1px 10px #999;
    }
  }
`;

export const EditList = styled.span`
  color: ${GlobalColors.red};
  font-size: 12px;
  cursor: pointer;
  margin: 0px 5px;
`;

