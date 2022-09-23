import { Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Main from "./components/main/main";
import Register from "./components/register/register";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main:Id" element={<Main />} />
      </Router>
    </div>
  );
}

export default App;
