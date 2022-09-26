const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Login = require("./login");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", async (req, res) => {
  res.send(await Login.Login(req.body.body));
});

app.listen(port, () => {
  console.log(`App listen on http://localhost:${port}`);
});
