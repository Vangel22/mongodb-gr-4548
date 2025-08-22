const mongoose = require("mongoose");

const User = require("./users"); // go zemame modelot

const URI =
  "mongodb+srv://Vangel22:test1234@cluster0.12jzasd.mongodb.net/grupa-4548?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = () => {
  try {
    mongoose.connect(URI);
    console.log("Connected!");
  } catch (err) {
    console.log(err);
  }
};

connectDb();

const main = async () => {
  // Create
  //   const newUser = new User({
  //     name: "Vangel",
  //     age: 22,
  //     hobbies: ["Books", "Programming"],
  //     email: "vangel@test.com",
  //     address: {
  //       street: "Mara Minanova br.9",
  //       city: "Strumica",
  //     },
  //   });

  //   await newUser.save();

  //   console.log("new user", newUser);

  // Read
  const findUser = await User.findOne({ name: "Vangel" });

  console.log("Found user: ", findUser);

  // update
  //   await User.updateOne({ _id: findUser._id }, { age: 25 });

  //   const userAfterUpdate = await User.findOne({ name: "Vangel" });

  //   console.log("User after update: ", userAfterUpdate);
  // delete

  await User.deleteOne({ _id: findUser._id });

  const allUsers = await User.find();

  console.log("All users", allUsers);
};

// main();

const mainStudents = async () => {
  // Create
  // Read
  // Update
  // Delete
};
