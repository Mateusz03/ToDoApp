import { ReactComponent as Done } from "../../assets/image/done.svg";
import { ReactComponent as Trash } from "../../assets/image/delete.svg";
import { getToken, setToken } from "../others/token";
import "./main.css";
const Main = () => {
  return (
    <div className="mainContainer">
      <header>
        <h1 className="nick">Welcome, {getToken().username}</h1>
        <div
          className="logout"
          onClick={() => {
            setToken({ token: false });
            window.location.reload(true);
          }}
        >
          Logout
        </div>
      </header>
      <main>
        <div>
          <nav>
            <div className="task"></div>
            <div className="taskButtons">
              <Done className="done" />
              <Trash className="trash" />
            </div>
          </nav>
        </div>
        <div className="createToDo">
          <p className="ToDoTitle">What you need to do?</p>
          <textarea wrap="soft" type="text" className="ToDoInput" />
          <div className="doneButton">Done</div>
        </div>
      </main>
    </div>
  );
};
export default Main;
