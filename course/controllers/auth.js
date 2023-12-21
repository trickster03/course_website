const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} = require("../errors");
const User = require("../models/User");

const createAdmin = async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    throw new BadRequestError("Please provide all the details");
  }
  const user = await User.create({ email, name, password });
  const token = user.createJWT();
  res.status(201).json({ user, token });
};

// const login = async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     throw new BadRequestError("Please provide both email and password");
//   }
//   const user = await User.findOne({ email });
//   if (!user) {
//     throw new NotFoundError(`No user found with email ${email}`);
//   }

//   const isPasswordCorrect = await user.comparePassword(password);
//   if (!isPasswordCorrect) {
//     throw new UnauthenticatedError("Invalid Credentials");
//   }

//   const token = user.createJWT();
//   res.status(200).json({
//     user: {
//       name: user.name,
//       token,
//     },
//   });
// };

const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide both email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotFoundError(`No user found with email ${email}`);
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  const token = user.createJWT();
  res.status(200).json({
    user: {
      name: user.name,
      token,
    },
  });
};

module.exports = { createAdmin, adminLogin };
