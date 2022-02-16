import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./scenes/Login";
import Welcome from "./scenes/Welcome";
import SignUp from "./scenes/SignUp";

function App() {
  const [user, setUser] = useState();

  return (
    <Routes>
      <Route path="/login" element={<Login setUser={setUser} />}></Route>
      <Route path="/signup" element={<SignUp setUser={setUser} />}></Route>
      <Route
        path="/"
        element={user ? <Welcome user={user} /> : <Login setUser={setUser} />}
      ></Route>
    </Routes>
  );
}

export default App;
