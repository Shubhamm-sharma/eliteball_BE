const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./src/Routers/index");
require("dotenv").config();

app.use(express.json());
app.use(express.json());
app.use(cors());
app.use(routes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Successfully Connected to eliteball");
  })
  .catch((err) => {
    console.log("Unable to connect to MongoDB. Error: " + err);
  });

app.listen(process.env.PORT, () =>
  console.log(`Example app listening at ${process.env.PORT}`)
);
