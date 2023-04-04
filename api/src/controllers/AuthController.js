const { User } = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcryptjs");

exports.register = async (email, password) => {
  if (!email || !password) throw new Error("User not registered");

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const [user, created] = await User.findOrCreate({
    where: { email: email },
    defaults: {
      password: hash
    }
  });

  if (!created) throw new Error("User already exists");

  return user;
};

exports.login = async (email, password) => {
  if (!email || !password) throw new Error("Wrong credentials");

  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("User not found");

  const pass = await bcrypt.compare(password, user.password);
  console.log("user", pass);

  if (!pass) throw new Error("Password is incorrect");

  const token = jwt.sign({ id: user._id }, process.env.KEY_JWT, {
    expiresIn: "1h",
  });
console.log(user)
  return { token, id:user.dataValues.id, email: user.dataValues.email };
};
