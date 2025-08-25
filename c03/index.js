const express = require("express");

const connect = require("./db/config");
connect();
const {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  getUserByEmail,
  removeUser,
} = require("./controllers/usersController");
// require("./db/config");

const app = express();

app.use(express.json());

app.post("/users", createUser);
app.get("/users", getAllUsers);
app.get("/users/:id", getSingleUser);
app.put("/users/:id", updateUser);
app.get("/users/email/:email", getUserByEmail);
app.delete("/users/:id", removeUser);

app.listen(3000, () => {
  console.log("Server is listening!");
});
