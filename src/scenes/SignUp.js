import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Trying to sign-up as ${email}`);
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
      <p>
        Already a user? <Link to="/login">Login</Link>
      </p>
    </>
  );
}

export default SignUp;
