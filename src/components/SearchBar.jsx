import { useState } from "react";
import "../styles/SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  function handleChange(event) {
    setId(event.target.value);
  }
  return (
    <div className="search">
      <div className="searche">
        <input onChange={handleChange} 
        type="search" 
        name="search" 
        value={id}
        placeholder="buscar" />
      </div>
      <div className="searche">
        <button 
        className="button-buscar"
        onClick={() => onSearch(id)}>Agregar</button>
      </div>
    </div>
  );
}
