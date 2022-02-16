import { Routes, Route } from "react-router-dom";
import Login from "./scenes/Login";
import Welcome from "./scenes/Welcome";
import SignUp from "./scenes/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/" element={<Welcome />}></Route>
    </Routes>
  );
}

export default App;
