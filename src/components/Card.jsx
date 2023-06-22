import "../styles/Card.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, image, species, gender, onClose }) {
  return (
    <div className="card">
      <button 
      className="button-close"
      onClick={() => onClose(id)}>X</button>
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
