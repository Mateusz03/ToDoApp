import "./register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../others/sign";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    firstPassword: "",
    secondPassword: "",
  });
  const [result, setResult] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onChange = (input) => {
    if (input.target.type === "text") {
      setInputs({ ...inputs, username: input.target.value });
      return;
    }
    if (input.target.name === "firstPass") {
      setInputs({ ...inputs, firstPassword: input.target.value });
      return;
    }
    if (input.target.name === "secondPass") {
      setInputs({ ...inputs, secondPassword: input.target.value });
      return;
    }
  };
  const onClick = (button) => {
    if (button === "Sign In") {
      navigate(`/signIn`);
    } else if (button === "Register") {
      if (inputs.firstPassword === inputs.secondPassword) {
        const sign = signUp(inputs);
        if (sign) {
          setResult(sign.message);
          setError(sign.messageValue);
          return;
        }
        setResult(false);
        setError("");
        return;
      }
      setError("Incorrect password values");
    }
  };
  const style = {
    username: {
      borderBottom:
        result === "username" || result === "both"
          ? " 2px solid #FF0033"
          : " 2px solid black",
    },
    password: {
      borderBottom:
        result === "password" || result === "both"
          ? " 2px solid #FF0033"
          : " 2px solid black",
    },
  };
  return (
    <div className="registerContent">
      <div className="inputs">
        <p className="inputTitle">Username</p>
        <input
          type={"text"}
          style={style.username}
          maxLength="12"
          value={inputs.username}
          onChange={(val) => {
            onChange(val);
          }}
        />
      </div>
      <div className="inputs">
        <p className="inputTitle">Password</p>
        <input
          type={"password"}
          style={style.password}
          name="firstPass"
          minLength="8"
          value={inputs.firstPassword}
          onChange={(val) => {
            onChange(val);
          }}
        />
      </div>
      <div className="inputs">
        <p className="inputTitle">Repeat Password</p>
        <input
          type={"password"}
          style={style.password}
          name="secondPass"
          minLength="8"
          value={inputs.secondPassword}
          onChange={(val) => {
            onChange(val);
          }}
        />
      </div>
      <div className="errorRegister">{error}</div>
      <div className="signButtons">
        <div
          className="button signLogin2"
          onClick={(button) => {
            onClick(button.target.textContent);
          }}
        >
          Sign In
        </div>
        <div
          className="button signRegister2"
          onClick={(button) => {
            onClick(button.target.textContent);
          }}
        >
          Register
        </div>
      </div>
    </div>
  );
};
export default Register;
