import { ReactComponent as Done } from "../../assets/image/done.svg";
import { ReactComponent as Trash } from "../../assets/image/delete.svg";
import { getToken, setToken } from "../others/token";
import "./main.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [textValue, setTextValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [items, setItem] = useState();
  const [click, setClick] = useState(false);
  const [firstRender, setRender] = useState(true);

  const trash = async (key) => {
    await axios.post(
      "http://localhost:3001/delete",
      { body: { userId: getToken().token, id: key, ...todo[key] } },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    );
  };

  const done = async (key) => {
    console.log(key);
  };

  useEffect(() => {
    if (firstRender) {
      const fetchData = async () => {
        await axios
          .post(
            "http://localhost:3001/todo",
            {
              body: {
                userId: getToken().token,
                allValues: true,
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            },
          )
          .then((res) => {
            setTodo(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        setRender(false);
      };
      fetchData();
    }

    const addNewValues = () => {
      let itemList = [];

      todo.forEach((item, key) => {
        itemList.push(
          <nav key={key}>
            <div className="task">{item.value}</div>
            <div className="taskButtons">
              <Done
                className="done"
                onClick={() => {
                  done(key);
                }}
              />
              <Trash
                className="trash"
                onClick={() => {
                  trash(key);
                }}
              />
            </div>
          </nav>,
        );
      });
      console.log(itemList);
      setItem(itemList);
    };
    if (click || todo) {
      addNewValues();
      setClick(false);
    }
  }, [todo, click, firstRender]);

  const addItem = async () => {
    if (textValue) {
      await axios
        .post(
          "http://localhost:3001/todo",
          {
            body: {
              userId: getToken().token,
              value: textValue,
              ended: false,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          },
        )
        .then((res) => {
          setTodo([...todo, res.data]);
        })
        .catch((err) => {
          console.log(err);
        });
      setClick(true);
    }
  };

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
        <div className="taskContainer">{items}</div>
        <div className="createToDo">
          <p className="ToDoTitle">What you need to do?</p>
          <textarea
            wrap="soft"
            type="text"
            className="ToDoInput"
            value={textValue}
            onChange={(e) => {
              setTextValue(e.target.value);
            }}
          />
          <div className="doneButton" onClick={addItem}>
            Done
          </div>
        </div>
      </main>
    </div>
  );
};
export default Main;
