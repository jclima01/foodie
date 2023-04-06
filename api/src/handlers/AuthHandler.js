const { register, login } = require("../controllers/AuthController");

  const registerHandler = async (req, res) => {
    const { email, password } = req.body;
    try {
      const newUser = await register(email, password);
      console.log(newUser);
      res.status(200).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  const loginHandler = async (req, res) => {
    const { email, password } = req.body;
    try {
      const userSingin = await login(email, password);
      console.log(userSingin);
      res.status(200).json(userSingin);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  module.exports = {
    registerHandler,
    loginHandler,
    
  };
  