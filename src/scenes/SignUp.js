import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../ConnectAuth";

function SignUp({ setUser, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        //setUser in (), go to parent and pass prop
        setUser(result.user);
        //nav to home (welcome page)
        navigate("/");
      })
      .catch(alert);
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch();
  };
  return (
    <>
      <h1>Signup</h1>
      <hr />
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            //when this event happens..set email to value being typed into form
            //value && onChange work together
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Sign Up" />
      </form>
      <button
        onClick={handleGoogleLogin}
        style={{ backgroundColor: "black", color: "white", border: "none" }}
      >
        Sign in with Google
      </button>
      <p>
        Already a user? <Link to="/login">Login</Link>
      </p>
    </>
  );
}

export default SignUp;
