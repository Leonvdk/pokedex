import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext(null);

export default function UserContextProvider(props) {

  return (
    <UserContext.Provider
      value={{ }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
