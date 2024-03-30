const userSchema = require("../Models/userModal");

const loginUser = async (req, res) => {
  const { name, phoneNumber, email, age, username, password } = req.body;
  const existingUser = await userSchema.findOne({ email });
  try {
    if (name && phoneNumber && email && age && username && password) {
      if (existingUser) {
        if (
          existingUser?.email === email &&
          existingUser?.password === password
        ) {
          res.status(200).json({ status: 200, message: "Login Successful" });
        }
      } else {
        res.status(400).json({ status: 400, message: "No user found" });
      }
    } else {
      res.status(400).json({ status: 400, message: "All fields are required" });
    }
  } catch (error) {
    res.status(400).json({ status: 401, error });
  }
};

module.exports = { loginUser };
