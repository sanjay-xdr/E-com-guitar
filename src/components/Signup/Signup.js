import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
export default function Signup() {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [type, setType] = useState(false);
  const [error, setError] = useState(false);

  const signUpHandler = async (e) => {
    e.preventDefault();
    setError(false);
    if (password === confirmPassword) {
      try {
        const response = await axios.post(`/api/auth/signup`, {
          firstname,
          lastname,
          email,
          password,
        });
        // saving the encodedToken in the localStorage
        localStorage.setItem("token", response.data.encodedToken);
    
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
    }
  };

  return (
    <>
      <main className="container-flex flex-center form-container flex-column">
        <h2 className="font-xl">Sign Up</h2>
        <form
          onSubmit={(e) => {
            signUpHandler(e);
          }}
        >
          <label for="" className="label-text">
            First Name <br />
            <input
              type="text"
              className="input"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <br />

          <label for="" className="label-text">
            Last Name <br />
            <input
              type="text"
              className="input"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <br />

          <label for="" className="label-text">
            Email <br />
            <input
              type="email"
              className="input"
              id="required"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />

          <label for="" className="label-text">
            Password <br />
            <input
              type="password"
              className="input"
              id="required"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <br />
          <label for="" className="label-text">
            Confirm Password <br />
            <input
              type={type ? "text" : "password"}
              id="required"
              className="input"
              value={confirmPassword}
              required
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </label>
          <span
            className="material-symbols-outlined visibility"
            onClick={() => setType((item) => !item)}
          >
            visibility
          </span>
          <br />

          <br />

          {error && <h3 className="font-l">Passowrd doesnt Match</h3>}

          <br />
          <br />

          <input type="submit" className="input btn-default" value="Signup" />
          <br />
          <br />
        </form>
      </main>
    </>
  );
}
