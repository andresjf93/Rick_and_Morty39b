import React from "react";
import Card from "./Card";
import { connect, useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards, removeFav, reset } from "../Redux/actions/actions";


export default function Favorites({ onClose }) {
  const {myFavorites} = useSelector((state) => state);
  const dispatch = useDispatch();
  function closeFavorite(id) {
    onClose(id);
    dispatch(removeFav(id));
  }
  function handleOrder(e) {
    e.preventDefault();
    const { value } = e.target;
    dispatch(orderCards(value));
  }

  function handleFilter(e) {
    e.preventDefault();
    const {name, value } = e.target;
    dispatch(filterCards(value));
  }
  function resetButton(){
    dispatch (reset())
  }
  return (
    <div>
      <select
        onChange={handleOrder}
        name="order"
        defaultValue={"DEFAULT"}
        id=""
      >
        <option value="DEFAULT" disabled>
          Sekect Order
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select
        onChange={handleFilter}
        name="filter"
        defaultValue={"DEFAULT"}
        id=""
      >
        <option value="DEFAULT" disabled>
          Sekect Filter
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <button onClick={resetButton}>Reset</button>
       
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
              onClose={() => closeFavorite(Element.id)}
            ></Card>
          );
        })}
    </div>
  );
}
//function mapState(st) {
//return {
//myFavorites: st.myFavorites,
// };
//}
//function mapDispatch(d) {
//return {
//  removeFav: (id) => d(removeFav(id)),
// };
//}
//export default connect(mapState, mapDispatch)(favorites);
