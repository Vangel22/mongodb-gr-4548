const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    age: {
      type: Number,
      default: 20,
      min: 1,
      max: 100,
      validate: {
        // value e toa sto e isprateno koga go kreirame podatokot (t.e koga ke napravime .save())
        validator: (value) => value % 2 === 0,
        message: (props) => `${props.value} is not an even number.`,
      },
    },
    email: {
      type: String,
      unique: true, // unikatno pole koe ni potvrduva deka nema da ima duplikat
      minLength: 10,
      lowercase: true,
      // uppercase: false
    },
    bestFriend: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    hobbies: [String],
    address: {
      street: String,
      city: String,
    },
    //   createdAt: {
    //     immutable: true,
    //     type: Date,
    //     default: () => Date.now(),
    //   },
    //   updatedAt: {
    //     type: Date,
    //     default: () => Date.now(),
    //   },
  },
  { timestamps: true } // gi zemenuva createdAt i updatedAt vo schemata (avtomatski gi zapisuva)
);

const UserModel = mongoose.model("User", userSchema, "users");

// Create
const create = async (data) => {
  // req.body
  const user = new UserModel(data);
  return await user.save();
};

// Read
// const getById = async (id) => {
//     return await UserModel.findOne({ _id: id })
// }

const getById = async (_id) => {
  return await UserModel.findOne({ _id });
};

const getAll = async () => {
  return await UserModel.find();
};

const getByEmail = async () => {};

// Update

const update = async (id, data) => {
  return await UserModel.updateOne({ _id: id }, data);
};

// Delete

const remove = async () => {};

// TODO: Implementirajte gi getByEmail i remove

module.exports = {
  create,
  getAll,
  getById,
  getByEmail,
  update,
  remove,
};
