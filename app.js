require("dotenv").config();
require("express-async-errors");
const morgan = require("morgan");
const connectDB = require("./db/connect");
const errorHandler = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

const staffsRoutes = require("./routes/staffs");
const studentsRoutes = require("./routes/students");

const express = require("express");
const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/staffs", staffsRoutes);
app.use("/api/v1/students", studentsRoutes);

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 4000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server listening on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
