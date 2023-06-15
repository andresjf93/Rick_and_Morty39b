import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          let exist = characters.find((ch) => ch.id === data.id);
          if (exist) {
            alert("ya existe ");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert ("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
  }

  return (
    <div className="App">
      <NavBar onSearch={onSearch} />
      <Cards onClose={onClose} characters={characters} />
    </div>
  );
}

export default App;
