import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Main from "./components/main/main";
import Sign from "./components/sign/sign";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign:signAuth" element={<Sign />} />
        <Route path="/main:Id" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
