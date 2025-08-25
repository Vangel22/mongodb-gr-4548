const {
  create,
  getAll,
  getById,
  update,
  getByEmail,
  remove,
} = require("../models/users");

const createUser = async (req, res) => {
  try {
    const newUser = await create(req.body);
    return res.status(200).send(newUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await getAll();
    return res.status(200).send(allUsers);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

const getSingleUser = async (req, res) => {
  try {
    const foundUser = await getById(req.params.id);
    return res.status(200).send(foundUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

const updateUser = async (req, res) => {
  try {
    await update(req.params.id, req.body);
    return res.status(204).send("");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const foundUser = await getByEmail(req.params.email);
    return res.status(200).send(foundUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

const removeUser = async (req, res) => {
  try {
    await remove(req.params.id);
    return res.status(200).send("Successfully deleted!");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  getUserByEmail,
  removeUser,
};
