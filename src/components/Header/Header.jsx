import React, { useContext, Fragment } from "react";
import { HeaderMain, LoginForm, Input, Button } from "./Header.style";
import { AuthContext } from "../../contexts/AuthContext";

function Header() {
  const { setUser, login, logout, auth } = useContext(AuthContext);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <HeaderMain>
      <h1>PokLédex</h1>
      <LoginForm
        onSubmit={(event) => {
          if(auth){
            logout()
          } else {
            event.preventDefault();
            login()
          }
        }}
      >
        {auth
        ?
        <div></div>
        // <Button id="view-profile">View Profile</Button>
        :
        <Fragment>
          <Input
            placeholder="username"
            name="identifier"
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <Input
            type="password"
            placeholder="password"
            name="password"
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </Fragment>}
        <div id="buttons">
          {auth ? (
            <Button id="logout-button" type="submit" > Logout </Button>
          ) : (
            <Fragment>
              <Button type="submit" > Login </Button>
              <Button> Register </Button>
            </Fragment>
          )}
        </div>
      </LoginForm>
    </HeaderMain>
  );
}

export default Header;
