import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export default function Login({ login }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function validate(inputs) {
    const errors = {};
    if (!inputs.email) {
      errors.email = " debe haber un email";
    } else if (!inputs.password) {
      errors.password = " debe haber un password";
    } else if (!regexEmail.test(inputs.email)) {
      errors.email = " debe ser un email valido";
    } else if (!regexPassword.test(inputs.password)) {
      errors.password = " debe ser un password valido";
    }
    return errors;
  }

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  }
  function handleonSubmit(e) {
    e.prevent.default();
    const aux = Object.keys(errors);
    if (aux.length === 0) {
      setInputs({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
      login(inputs)
      return alert("okkkkk");
    }
    return alert("error");
  }
  return (
    <div className="titulo">
      <form onSubmit={handleonSubmit}>
        <label>Email: </label>
        <input
          name="email"
          value={inputs.email}
          placeholder="email"
          onChange={handleChange}
        ></input>
        <p className="danger">{errors.email}</p>
        <label>Password: </label>
        <input
          name="password"
          value={inputs.password}
          placeholder="password"
          onChange={handleChange}
        ></input>
        <p className="danger">{errors.password}</p>
        {Object.keys(errors).length === 0 ? (
          <Link to="/home">
            <button type="sudmit">Ingresar</button>
          </Link>
        ) : null}
      </form>
    </div>
  );
}
