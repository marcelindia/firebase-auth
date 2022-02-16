import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Welcome({ user }) {
  console.log(user); //email,displayName, photoURL
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        localStorage.clear();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <h1>Welcome</h1>
      <h2>{user.displayName || user.email}</h2>
      {user.photoURL && (
        <img src={user.photoURL} alt="Profile of logged-in user." />
      )}
      <br />
      <button
        onClick={handleLogout}
        style={{ backgroundColor: "black", color: "white", border: "none" }}
      >
        Logout
      </button>
    </>
  );
}

export default Welcome;
