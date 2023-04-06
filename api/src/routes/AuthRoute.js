const { Router } = require("express");
const { registerHandler, loginHandler } = require("../handlers/AuthHandler");
const router = Router();


//Router Authentication
router.post("/register", registerHandler);

router.post("/login", loginHandler);

module.exports = router;
