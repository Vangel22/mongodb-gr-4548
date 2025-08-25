const express = require("express");

const connect = require("./db/config");
connect();
const { createUser } = require("./controllers/usersController");
// require("./db/config");

const app = express();

app.use(express.json());

app.post("/users", createUser);

app.listen(3000, () => {
  console.log("Server is listening!");
});
