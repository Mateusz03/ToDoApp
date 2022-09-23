const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`App listen on http://localhost:${port}`);
});
