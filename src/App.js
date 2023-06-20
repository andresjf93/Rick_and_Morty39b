import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Detail from "./components/Detail";
import About from "./components/About";

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "unaPassword";

  const [characters, setCharacters] = useState([]);
  const Location = useLocation();
  function login(inputs) {
    if (inputs.password === PASSWORD && inputs.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  function logout() {
      setAccess(false);
      navigate("/");
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

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
          window.alert("¡No hay personajes con este ID!");
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
      {Location.pathname === "/" ? null : <NavBar logout={logout} onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Login login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
