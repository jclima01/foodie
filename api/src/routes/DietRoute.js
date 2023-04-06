const { Router } = require("express");
const router = Router();
const {
  postDietsHandler,
  getDietsHandler,
} = require("../handlers/DietHandler");

//Router Authentication
router.post("/", postDietsHandler);
router.get("/", getDietsHandler);

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
