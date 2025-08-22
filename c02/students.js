const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  // vasata schema
});

module.exports = mongoose.model("Student", studentSchema, "students");
