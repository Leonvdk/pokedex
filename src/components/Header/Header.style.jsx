import styled from "styled-components";
import { GlobalColors, BoxShadow } from "../../globalStyles"

export const HeaderMain = styled.div`
  height: 75px;
  color: white
  background: rgb(230,134,134);
  background: -moz-linear-gradient(167deg, rgba(230,134,134,1) 6%, rgba(247,16,19,1) 30%, rgba(172,23,26,1) 84%, rgba(175,6,6,1) 100%);
  background: -webkit-linear-gradient(167deg, rgba(230,134,134,1) 6%, rgba(247,16,19,1) 30%, rgba(172,23,26,1) 84%, rgba(175,6,6,1) 100%);
  background: linear-gradient(167deg, rgba(230,134,134,1) 6%, rgba(247,16,19,1) 30%, rgba(172,23,26,1) 84%, rgba(175,6,6,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#e68686",endColorstr="#af0606",GradientType=1);
  border-radius: 0px 0px 10px 10px;
  border: 5px solid ${GlobalColors.black};
  ${BoxShadow}

  ; 
`;