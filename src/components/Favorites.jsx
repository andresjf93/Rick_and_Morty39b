import React from "react";
import Card from "./Card";
import { Connect, connect } from "react-redux";
import { removeFav } from "../Redux/actions/actions";

function favorites({myFavorites, onClose, removeFav}) {

    function closeFavorite(id){
        onClose(id)
        removeFav(id)
    }
  return (
    <div>
      {myFavorites &&
        myFavorites.map((Element, index) => {
          return (
            <Card
              key={index}
              id={Element.id}
              name={Element.name}
              status={Element.status}
              species={Element.species}
              gender={Element.gender}
              origin={Element.origin.name}
              image={Element.image}
              onClose={()=> closeFavorite(Element.id)}
            ></Card>
          );
        })}
    </div>
  );
}
function mapState(st) {
  return {
    myFavorites: st.myFavorites,
  };
}
function mapDispatch(d) {
    return {
      removeFav: (id)=>d(removeFav(id))
    };
  }
export default connect(mapState, mapDispatch)(favorites);
