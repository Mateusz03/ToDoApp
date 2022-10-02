import Register from "../register/register";
import Login from "../login/login";

import { useParams, useNavigate } from "react-router-dom";
import "./sign.css";
import Close from "../../assets/image/close.svg";
const Sign = () => {
  let { signAuth } = useParams();
  const navigate = useNavigate();
  return (
    <div className="bgBlur">
      <div className="signContainer">
        <img
          src={Close}
          alt="close"
          className="signClose"
          onClick={() => {
            navigate("/");
          }}
        />
        {signAuth === "In" && <Login />}
        {signAuth === "Up" && <Register />}
      </div>
    </div>
  );
};
export default Sign;
