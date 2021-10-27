const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//Import Routes
const authRoute = require("./routes/auth");
const propertiesRoute = require("./routes/properties");

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("Connected to DB!")
);

//Middleware
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/properties", propertiesRoute);

app.listen(3000, () => console.log("Server is running at 3000"));
