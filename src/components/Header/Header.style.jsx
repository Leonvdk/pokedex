import styled from "styled-components";
import { GlobalColors, BoxShadow, GradientBG } from "../../globalStyles";

export const HeaderMain = styled.div`
  height: 85px;
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
  grid-template-areas: " . . title . login";

  h1 {
    grid-area: title;
    justify-self: center;
    align-self: center;
  }
`;

export const LoginForm = styled.form`
  font-family: eightbit;
  width: 200px;
  grid-area: login;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  buttons{
    display: flex;
    flex-direction:row;
  }
`;

export const Input = styled.input`
  width: 150px;
  height: 23px;
  background-color: ${GlobalColors.green};
  font-family: eightbit;
  font-size: 2em;
`;

export const Button = styled.button`
  font-family: eightbit;
  margin: 5px 0 0 10px;
  align-self: flex-start;
  padding: 5px 10px;
  align-items: center;
  font-size: 20px;
  background-color: orange;
  color: ${GlobalColors.black};
  text-decoration: none;
  border: 3px solid #333;
  border-radius: 5px;
  box-shadow: 3px 3px 0px 1px rgb(3, 3, 3, 0.4);
  transition: all 0.2s ease-out;
  position: relative;

  &:hover {
    transform: translate(2px);
    box-shadow: 1px 1px 0px 1px rgb(3, 3, 3, 0.4);
  }

  * {
    cursor: pointer;
  }

  &#view-profile{
    background-color: beige
  }

  &#logout-button{
    background-color: rgb(225, 225, 225, .6)
  }
`;
