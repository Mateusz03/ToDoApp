import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Main from "./components/main/main";
import { getToken } from "./components/others/token";
import { useNavigate,useLocation } from "react-router-dom";

import Sign from "./components/sign/sign";


function App() {
  const [token, setToken] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    if(getToken()?.token){
      navigate(`/main${getToken().token}?${getToken().username}`);
      setToken(true);
      return;
  }
  
  setToken(false);
  if(!token && location.pathname.includes('/main')){
    navigate('/');
  }
},[navigate,token,location.pathname]);

  return (
    <div className="App">
      <Routes>
        {!token&&<Route path="/" element={<Home />} />}
        {!token&&<Route path="/sign:signAuth" element={<Sign />} />}
        {token&&<Route path="/main:Id:User" element={<Main />} />}
      </Routes>
    </div>
  );
}

export default App;
