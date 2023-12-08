const express = require("express");
const app = express();
require("dotenv").config();
require("express-async-errors");

const connectDB = require("./utils/connectDB");
const port = process.env.PORT || 3000;

//routers
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const notesRouter = require("./routes/notesRoutes");

//middlewares
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddeware = require("./middleware/not-found");

const fileupload = require("express-fileupload");

app.use(express.json());
app.use(fileupload());

app.use(express.static("public"));
app.use("/api/v1", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/notes", notesRouter);

app.use(notFoundMiddeware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
