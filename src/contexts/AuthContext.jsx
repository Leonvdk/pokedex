import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Cookies from "js-cookie";
// import { config } from "../helpers/auth";

export const AuthContext = createContext(null);

export default function AuthContextProvider(props) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({
    identifier: "",
    password: "",
  });

  const login = async () => {
    const response = await axios.post("http://localhost:1337/auth/local", user);
    try {
      const jwtToken = response.data.jwt;
      Cookies.set("authToken", jwtToken);
      const currentUser = await axios.get("http://localhost:1337/users/me", {
        headers: {
          Authorization: "Bearer " + jwtToken,
        },
      });
      try {
        setUser(currentUser.data);
        console.log(currentUser.data);

        setAuth(true);
      } catch (error) {
        setAuth(false);
        Cookies.remove("authToken");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    setAuth(false);
    Cookies.remove("authToken")
  };

  useEffect(() => {
    // login();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, auth, setAuth, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = { children: PropTypes.any };
