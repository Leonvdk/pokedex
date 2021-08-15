import React from "react";
import styled from "styled-components";
// import pokeball from "../../Assets/Images/s_pokeball_pixel.png";
// import { GlobalColors, BoxShadow } from "../../globalStyles";

export const ResponsiveGrid = styled.div`

background-color: blue;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
gap: 20px 2px;

&>div {
  background-color: white;
  height: 200px;
  width: 200px;
}
}
`;

function Register(props) {
  return (
    <div>
      <ResponsiveGrid>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </ResponsiveGrid>
    </div>
  );
}

export default Register;
