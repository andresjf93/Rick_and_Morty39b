import React from "react";
import SearchBar from "./SearchBar";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ onSearch, logout }) {
  return (
    <div className="container">
      <div className="nav">
        <Link to="/home">
          <button className="button-home">Home</button>
        </Link>
      </div>
      <div className="nav">
        <Link to="/about">
          <button className="button-about">About</button>
        </Link>
      </div>
      <div className="buscador">
        <SearchBar onSearch={onSearch} />
        </div>
        <div className="nav">
        <button 
        className="button-out"
        onClick={logout}>LogOut</button>
      </div>
    </div>
  );
}
