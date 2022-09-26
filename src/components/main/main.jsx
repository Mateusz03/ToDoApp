import "./main.css";
import { ReactComponent as Add } from "../../assets/image/add.svg";
import { ReactComponent as Open } from "../../assets/image/open.svg";
import { ReactComponent as Trash } from "../../assets/image/delete.svg";
import { getToken } from "../others/token";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Main = () => {
  return (
    <div className="mainContainer">
      <header>
        <h1 className="nick">Welcome, {getToken().username}</h1>
        <div className="resetTasks">Reset</div>
        <div className="logout">Logout</div>
      </header>
      <main>
        <nav>
          <h1 className="taskTitle">To Do</h1>
          <ol>
            <li>
              Task
              <Open className="open" />
              <Trash className="trash" />
            </li>
            <li>
              Task
              <Open className="open" />
              <Trash className="trash" />
            </li>
            <li>
              Task
              <Open className="open" />
              <Trash className="trash" />
            </li>
          </ol>
          <Add className="addImg" />
        </nav>
        <nav>
          <h1 className="taskTitle">In progress</h1>
          <ol>
            <li>
              Task
              <Open className="open" />
              <Trash className="trash" />
            </li>
            <li>
              Task
              <Open className="open" />
              <Trash className="trash" />
            </li>
            <li>
              Task
              <Open className="open" />
              <Trash className="trash" />
            </li>
          </ol>
          <Add className="addImg" />
        </nav>
        <nav>
          <h1 className="taskTitle">Ended</h1>
          <ol>
            <li>
              Task
              <Open className="open" />
              <Trash className="trash" />
            </li>
            <li>
              Task
              <Open className="open" />
              <Trash className="trash" />
            </li>
            <li>
              Task
              <Open className="open" />
              <Trash className="trash" />
            </li>
          </ol>
          <Add className="addImg" />
        </nav>
      </main>
    </div>
  );
};
export default Main;
