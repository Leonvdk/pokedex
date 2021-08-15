import React, { useEffect, useContext, Fragment } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { PokeContext } from "../../../contexts/PokeContext";
import { List, ListButton, ListContainer, EditList } from '../pokedex.style'
import { AuthContext } from "../../../contexts/AuthContext";

function UserLists(props) {
  const { userLists, addToList, editListName, createNewList, getPokemonInList } = useContext(UserContext);
  const { selectedPokemon } = useContext(PokeContext);
  const { auth } = useContext(AuthContext);

  useEffect(()=>{
    renderLists()
  }, [userLists])

  const renderLists = () => (

    <ListContainer>
    {userLists.map((list) => (
      <List key={list.id}  >
        <p onClick={()=> getPokemonInList(list.id)}>{list.listName}<EditList onClick={()=>editListName(list.id)}>Edit</EditList></p>
          {selectedPokemon&&<ListButton title='Add Pokemon to this list' className="add" onClick={()=>addToList(list.id)}>+</ListButton>}
          {/* <ListButton title='Remove Pokemon from this list' className="remove" onClick=" ">-</ListButton> */}
      </List>
    ))}
    {auth&&
    <div id='new-list' onClick={createNewList}>Add new List</div>
    }
  </ListContainer>
  )

  return (
    <Fragment>
      {renderLists()}
    </Fragment>
  );
}

export default UserLists;