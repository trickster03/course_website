const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} = require("../errors");
const User = require("../models/User.js");

// const createUser = async (req, res) => {
//   const { email, name, password } = req.body;
//   if (!email || !name || !password || !role) {
//     throw new BadRequestError("Please provide all the details");
//   }

//   const user = await User.create(req.body);

//   const token = user.createJWT();

//   res.status(201).json({ user, token });
// };

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ users, count: users.length });
};

const getSingleUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  if (!user) {
    throw new NotFoundError(`No user found with id ${req.params.id}`);
  }
  res.status(200).json({ user });
};

const updateUser = async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    throw new BadRequestError("Provide email,name and password");
  }

  const user = await User.find({ _id: req.params.id });

  if (!user) {
    throw new NotFoundError(`No user found with id ${req.params.id}`);
  }
  if (check._id !== req.user.userID) {
    throw new UnauthenticatedError("Unauthorized route");
  }

  user.email = email;
  user.name = name;
  user.password = password;

  await user.save();

  res.status(200).json({ user });
};

const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete({ _id: req.params.id });
  if (!user) {
    throw new NotFoundError(`No user found with id ${req.params.id}`);
  }
  res.status(200).send();
};

module.exports = {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
