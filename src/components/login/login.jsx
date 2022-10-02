import { useState } from "react";
import "./login.css";
import { SignIn } from "../others/sign";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const [result, setResult] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onChange = (input) => {
    if (input.target.type === "text") {
      setInputs({ ...inputs, username: input.target.value });
      return;
    }
    if (input.target.type === "password") {
      setInputs({ ...inputs, password: input.target.value });
      return;
    }
  };

  const onClick = async (button) => {
    if (button === "Login") {
      const sign = await SignIn(inputs);
      if (sign) {
        if (sign?.token) {
          navigate(`/main${sign.token}?${sign.username}`);
          return;
        } else if (!sign?.token) {
          console.log(sign.token);
          setResult(false);
          setError("Wrong username or password");
          return;
        }
        setResult(sign?.message);
        setError(sign?.messageValue);
        return;
      }
      setResult(false);
      setError("");
    } else if (button === "Sign Up") {
      navigate(`/signUp`);
      return;
    }
  };

  const style = {
    username: {
      borderBottom:
        result === "username" || result === "both" || result === false
          ? " 2px solid #FF0033"
          : " 2px solid black",
    },
    password: {
      borderBottom:
        result === "password" || result === "both" || result === false
          ? " 2px solid #FF0033"
          : " 2px solid black",
    },
  };

  return (
    <div className="loginContent">
      <div className="inputs">
        <p>Username</p>
        <input
          style={style.username}
          type={"text"}
          maxLength="12"
          value={inputs.username}
          onChange={(val) => {
            onChange(val);
          }}
        />
      </div>
      <div className="inputs">
        <p>Password</p>
        <input
          style={style.password}
          type={"password"}
          minLength="8"
          maxLength="16"
          value={inputs.password}
          onChange={(val) => {
            onChange(val);
          }}
        />
      </div>
      <div className="error">{error}</div>
      <div className="signButtons">
        <div
          className="button signLogin"
          onClick={(button) => {
            onClick(button.target.textContent);
          }}
        >
          Login
        </div>
        <div
          className="button signRegister"
          onClick={(button) => {
            onClick(button.target.textContent);
          }}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Login;
