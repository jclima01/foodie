const { Router } = require("express");
const router = Router();
const {getDiet} = require('../controllers/DietController');

//Router Authentication
router.post("/", async (req, res) => {
  
  try {
     const newUser = await getDiet()
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// router.post("/", async (req, res) => {
//     const { email, password} = req.body;
//     try {
//        const userSingin = await login( email, password)
//       res.status(200).json(userSingin);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });


module.exports = router;
