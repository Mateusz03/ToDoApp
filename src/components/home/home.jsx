import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onClick = (obj) => {
    switch (obj) {
      case "Login":
        navigate(`/signIn`);
        return;
      case "Register":
        navigate(`/signUp`);
        return;
      default:
        return;
    }
  };

  return (
    <div className="homeContainer">
      <p className="title">To Do App</p>
      <div className="buttons">
        <div
          className="button login"
          value="Login"
          onClick={(button) => {
            onClick(button.target.textContent);
          }}
        >
          Login
        </div>
        <div
          className="button register"
          value="Register"
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
export default Home;
