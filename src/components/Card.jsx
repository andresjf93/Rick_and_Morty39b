import "../styles/Card.css";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { addFav, removeFav } from "../Redux/actions/actions";
import { useEffect, useState } from "react";

function Card(props) {
  const {
    id,
    name,
    image,
    species,
    gender,
    onClose,
    addFav,
    removeFav,
    myFavorites
  } = props;
  // const dispatch = useDispatch();
  //dispatch(addFav({}));

  const [isFav, setIsFav] = useState(false);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  }
  useEffect(() => {
          myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }, [myFavorites]);

  return (
    <div className="card">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button className="button-close" onClick={() => onClose(id)}>
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

function mapStateToProps(state) {
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
