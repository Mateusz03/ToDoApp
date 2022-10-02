import { ReactComponent as Done } from "../../assets/image/done.svg";
import { ReactComponent as Trash } from "../../assets/image/delete.svg";
import { getToken, setToken } from "../others/token";
import "./main.css";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [textValue, setTextValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [items, setItem] = useState();
  const [click, setClick] = useState(false);
  const [Render, setRender] = useState(true);

  const deleteItem = useCallback(
    async (key) => {
      await axios
        .post(
          "http://localhost:3001/delete",
          {
            body: {
              userId: getToken().token,
              value: todo[key].value,
              id: parseInt(todo[key].id),
              ended: todo[key].ended,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          },
        )
        .then((val) => {
          if (val.data) {
            todo.splice(key, 1);
            setRender(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [todo],
  );

  const done = useCallback(
    async (key) => {
      if (!todo[key].ended) {
        await axios
          .post(
            "http://localhost:3001/done",
            {
              body: {
                userId: getToken().token,
                value: todo[key].value,
                id: parseInt(todo[key].id),
                ended: todo[key].ended,
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            },
          )
          .then((val) => {
            todo[key] = {
              value: val.data.value,
              ended: val.data.ended,
              id: val.data.id,
            };
            setRender(true);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    [todo],
  );

  useEffect(() => {
    if (Render) {
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
          <nav
            key={key}
            style={{
              textDecorationLine: todo.find(
                (val) =>
                  val.ended === true &&
                  val.value === item.value &&
                  item.id === key,
              )
                ? "line-through"
                : "",
            }}
          >
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
                  deleteItem(key);
                }}
              />
            </div>
          </nav>,
        );
      });
      setItem(itemList);
    };
    if (click || todo || Render) {
      addNewValues();
      setClick(false);
    }
  }, [todo, click, Render, deleteItem, done]);

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
