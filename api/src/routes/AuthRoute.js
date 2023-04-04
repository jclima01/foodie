const { Router } = require("express");
const router = Router();
const { register, login } = require("../controllers/AuthController");

//Router Authentication
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await register(email, password);
    console.log(newUser);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userSingin = await login(email, password);
    console.log(userSingin);
    res.status(200).json(userSingin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
