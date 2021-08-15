import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
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
    font-family: 'eightbit';
  }
  body{
    background: #F71013;
  }

  h1{
    font-size: 40px;
    font-weight: 600;
    font-family: 'pokemon' !important;
  }
  h2{
    font-size: 30px;
    font-weight: 600;
  }

  h3{
    font-size: 25px;
    font-weight: 600;
  }

  h4{
    font-size: 20px;
    font-family: eightbit;
  }

  h5{
    font-size: 1.2rem;
    font-weight: 600;
  }

`;

export const GlobalColors = {
  red: '#F71013',
  black: '#333',
  green: '#C1DE3B',
  yellow: '#F7DA04',
  blue: '#3B53C5',
}

export const BoxShadow = `box-shadow: 5px 7px 0px 5px rgb(3,3,3,.4);`

export const GradientBG =   `background: rgb(230,134,134);
background: -moz-linear-gradient(167deg, rgba(230,134,134,1) 6%, rgba(247,16,19,1) 30%, rgba(172,23,26,1) 84%, rgba(175,6,6,1) 100%);
background: -webkit-linear-gradient(167deg, rgba(230,134,134,1) 6%, rgba(247,16,19,1) 30%, rgba(172,23,26,1) 84%, rgba(175,6,6,1) 100%);
background: linear-gradient(167deg, rgba(230,134,134,1) 6%, rgba(247,16,19,1) 30%, rgba(172,23,26,1) 84%, rgba(175,6,6,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#e68686",endColorstr="#af0606",GradientType=1);`


export default GlobalStyle;