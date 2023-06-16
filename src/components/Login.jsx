import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <label>Passwor: </label>
      <imput></imput>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
}
