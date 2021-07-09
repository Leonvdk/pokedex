import styled, { createGlobalStyle } from "styled-components";
import eightBit from "./Assets/Fonts/Pokemon Hollow.ttf"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: eightbit;
    src: url(${eightBit}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  html {
    font-size: 10px;
    margin: 0 0 0 20px;
  }
  body{
    background: #EDECDD;
    font-family: eightbit
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

export default GlobalStyle;