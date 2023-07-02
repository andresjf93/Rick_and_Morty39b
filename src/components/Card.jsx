import "../styles/Card.css";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../Redux/actions/actions";
import { useEffect, useState } from "react";

export default function Card(props) {
  const { id, name, image, species, gender, onClose } = props;

  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();
  //dispatch(addFav({}));

  const [isFav, setIsFav] = useState(false);
  const { myFavorites } = useSelector((s) => s);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
    setAux(!aux);
  }
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  function superClouse() {
    onClose(id);
    dispatch(removeFav(id));
  }

  return (
    <div className="card">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button className="button-close" onClick={superClouse}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <div className="container-card">
          <div className="box">
            <h3>{species}</h3>
          </div>
          <div className="box">
            <h3>{gender}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

/*function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: (ch) => dispatch(addFav(ch)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
*/
