import "./register.css";

const Register = () => {
  return (
    <div className="registerContent">
      <div className="inputs">
        <p className="inputTitle">Username</p>
        <input type={"text"} maxLength="12" />
      </div>
      <div className="inputs">
        <p className="inputTitle">Password</p>
        <input type={"password"} minLength="8" />
      </div>
      <div className="inputs">
        <p className="inputTitle">Repeat Password</p>
        <input type={"password"} minLength="8" />
      </div>
      <div className="signButtons">
        <div className="button signLogin2">Sign In</div>
        <div className="button signRegister2">Register</div>
      </div>
    </div>
  );
};
export default Register;
