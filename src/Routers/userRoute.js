const express = require("express");
const userRoute = express.Router();
const { loginUser, signupUser } = require("../Controllers/userController");

userRoute.post("/loginuser", loginUser);
userRoute.post("/signupuser", signupUser);

module.exports = userRoute;
