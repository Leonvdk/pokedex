import "./reset.css";
import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import PokeContextProvider from "./contexts/PokeContext";
import UserContextProvider from "./contexts/UserContext";
import Pokedex from "./components/Pokedex/Pokedex";
import Register from "./components/Register/Register";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
      <PokeContextProvider>
        <UserContextProvider>
          <Switch>
            <Route exact path="/" component={Pokedex} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={UserProfile} />
          </Switch>
        </UserContextProvider>
      </PokeContextProvider>
  );
}

export default App;
