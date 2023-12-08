const User = require("./models/User");
require("dotenv").config();

const connectDB = require("./utils/connectDB");

const deleteStudents = async () => {
  await connectDB(process.env.MONGO_URI);
  console.log("connected to the DB....");
  const users = await User.find({ role: "Admin" });
  await User.deleteMany({});
  console.log(users);
};
deleteStudents();
