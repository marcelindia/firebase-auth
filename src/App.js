import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./scenes/Login";
import Welcome from "./scenes/Welcome";
import SignUp from "./scenes/SignUp";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    console.log("Here is my useEffect and user", user);
  }, []);

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login setUser={setUser} user={user} />}
      ></Route>
      <Route
        path="/signup"
        element={<SignUp setUser={setUser} user={user} />}
      ></Route>
      <Route
        path="/"
        element={user ? <Welcome user={user} /> : <Login setUser={setUser} />}
      ></Route>
    </Routes>
  );
}

export default App;
