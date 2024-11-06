// const number = require("./constants")

// console.log(number)

const express = require("express");
const users = require("./users");
const cors = require('cors')

const PORT = 3000;

const app = express();
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.listen(3000, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
