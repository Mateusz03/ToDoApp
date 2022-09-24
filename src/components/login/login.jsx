import { useState } from "react";
import "./login.css";
import execVerify from "../others/execVerification";

const Login = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });

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

  const signIn = () => {
    execVerify(inputs);
  };

  return (
    <div className="loginContent">
      <div className="inputs">
        <p>Username</p>
        <input
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
          type={"password"}
          minLength="8"
          value={inputs.password}
          onChange={(val) => {
            onChange(val);
          }}
        />
      </div>
      <div className="signButtons">
        <div className="button signLogin" onClick={signIn}>
          Login
        </div>
        <div className="button signRegister">Sign Up</div>
      </div>
    </div>
  );
};

export default Login;
