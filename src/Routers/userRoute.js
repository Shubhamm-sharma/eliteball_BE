const express = require("express");
const userRoute = express.Router();
const { loginUser } = require("../Controllers/userController");

userRoute.post("/loginuser", loginUser);

module.exports = userRoute;
