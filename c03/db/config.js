const mongoose = require("mongoose");

const URI =
  "mongodb+srv://Vangel22:test1234@cluster0.12jzasd.mongodb.net/grupa-4548?retryWrites=true&w=majority&appName=Cluster0";

async function connect() {
  try {
    await mongoose.connect(URI);
    console.log("Mongo connected!");
  } catch (err) {
    console.log(err);
  }
}

// connect();

module.exports = connect;
