import "./reset.css";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Pokedex from "./components/Pokedex/Pokedex";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Pokedex} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={UserProfile} />
    </Switch>
  );
}

export default App;
