import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext(null);

export default function UserContextProvider(props) {

  //User Id is static for now
  const userId = 1;

  const [ userLists, setUserLists ] = useState([]);

  const getAllLists = () => {
    axios.get(`http://localhost:5000/lists/all/${userId}/`)
    .then(response => {
      console.log([...response.data])
      setUserLists([...response.data])
    })
  }


  useEffect(() => {
    getAllLists()
  }, [])


  return (
    <UserContext.Provider
      value={{ userLists, setUserLists}}
    >
      {props.children}
    </UserContext.Provider>
  );
}
