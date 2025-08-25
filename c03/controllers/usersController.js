const { create } = require("../models/users");

const createUser = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const newUser = await create(req.body);
    return res.status(200).send(newUser);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

module.exports = {
  createUser,
};
