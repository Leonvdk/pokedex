import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { List } from '../pokedex.style'

function UserLists(props) {

  const { userLists, setUserLists } = useContext(UserContext);
  return (
    <div>
      {userLists.map((list) => (
        <List key={list.id} href='#'>
          <p>{list.listName}</p>

        </List>
      ))}
    </div>
  );
}

export default UserLists;