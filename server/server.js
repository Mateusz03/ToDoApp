const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Login = require("./login");
const Register = require("./register");
const Main = require("./main");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", async (req, res) => {
  res.send(await Login.Login(req.body.body));
});

app.post("/register", async (req, res) => {
  res.send(await Register.Register(req.body.body));
});

app.post("/todo", async (req, res) => {
  res.send(
    await Main.Main({
      id: req.body.body.userId,
      value: req.body.body.value,
      ended: req.body.body.ended,
      allValues: req.body.body.allValues,
    }),
  );
});

app.post("/delete", async (req, res) => {
  res.send(
    await Main.Delete({
      userId: req.body.body.userId,
      value: req.body.body.value,
      id: req.body.body.id,
    }),
  );
});

app.post("/done", async (req, res) => {});

app.listen(port, () => {
  console.log(`App listen on http://localhost:${port}`);
});
