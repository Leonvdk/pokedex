import "./reset.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import PokeContextProvider from './contexts/PokeContext'
import Pokedex from "./components/Pokedex/Pokedex";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import UserProfile from "./components/UserProfile/UserProfile";
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <AuthContextProvider>
      <PokeContextProvider>
        <UserContextProvider>
          <Switch>
            <Route exact path="/" component={Pokedex} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={UserProfile} />
          </Switch>
        </UserContextProvider>
      </PokeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
