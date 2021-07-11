import styled, { createGlobalStyle } from "styled-components";
import eightBit from "./Assets/Fonts/Eight-Bit Madness.ttf"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'eightbit';
    src: url(${eightBit});
    font-weight: normal;
    font-style: normal;
  }

  /* width */
::-webkit-scrollbar {
  width: 10px;
  border-radius: 10px 0px 0px 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px 0px 0px 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(0,0,0,.4); 
  border-radius: 10px 0px 0px 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(0,0,0,.7); 
  ; 
}

  html {
    font-size: 10px;
  }
  body{
    background: #F71013;
    font-family: 'eightbit';
  }

  h1{
    font-size: 3 rem;
    font-weight: 600;
  }
  h2{
    font-size: 2.5 rem;
    font-weight: 600;
  }

  h3{
    font-size: 1.8rem;
    font-weight: 600;
  }

  h4{
    font-size: 1.4rem;
    font-weight: 600;
  }

  h5{
    font-size: 1.2rem;
    font-weight: 600;
  }

`;

export const GlobalColors = {
  red: '#F71013',
  black: '#333',
  green: '#C1DE3B'
}

export default GlobalStyle;