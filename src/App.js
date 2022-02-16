import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./scenes/Login";
import Welcome from "./scenes/Welcome";
import SignUp from "./scenes/SignUp";

function App() {
  const [user, setUser] = useState();

  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/" element={user ? <Welcome /> : <Login />}></Route>
    </Routes>
  );
}

export default App;
