import styled from "styled-components";
import { GlobalColors, BoxShadow, GradientBG } from "../../globalStyles"

export const HeaderMain = styled.div`
  height: 75px;
  max-heigt: 12vh;
  padding: 20px;
  color: ${GlobalColors.yellow};
  ${GradientBG}
  border-radius: 0px 0px 10px 10px;
  border: 5px solid ${GlobalColors.black};
  ${BoxShadow}

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-template-areas: ' . . title . .';

  h1{
    grid-area: title;
    justify-self: center;
    align-self: center;
  }

  ; 
`;