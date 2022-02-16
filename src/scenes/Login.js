import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../ConnectAuth";

function Login({ setUser, user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  useEffect(() => {
    const localUser = localStorage.getItem("displayName");
    console.log("localUser from LS", localUser);
    if (localUser) setUser(localUser);
    //if theres a user already logged in, send them to welcome
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
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
        localStorage.setItem("displayName", result.user.displayName);
        console.log("this is my result", result.user.displayName);
        navigate("/");
      })
      .catch();
  };
  console.log("Here is my user from parent app component", user);
  return (
    <>
      <h1>Login</h1>
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
        <input type="submit" value="Login" />
      </form>
      <button
        onClick={handleGoogleLogin}
        style={{ backgroundColor: "black", color: "white", border: "none" }}
      >
        Sign in with Google
      </button>
      <p>
        Not a user? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  );
}

export default Login;
