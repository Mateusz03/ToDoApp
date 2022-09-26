import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Main from "./components/main/main";
import { getToken } from "./components/others/token";
import Sign from "./components/sign/sign";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign:signAuth" element={<Sign />} />
        <Route path="/main:Id:User" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
