import React,{createContext, useState, useEffect} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { config } from "../helpers/auth";

export const AuthContext = createContext(null);

export default function AuthContextProvider(props) {
  const [auth, setAuth] = useState(true);
  const [user, setUser] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("/auth/verify-token", config)
  //     .then((response) => {
  //       console.log(response.data)
  //       setUser(response.data);
  //       setAuth(true);
  //     })
  //     .catch(() => {
  //       setAuth(false);
  //       Cookies.remove("authToken");
  //     });
  // }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}