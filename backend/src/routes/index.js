const { Router } = require("express");
const signUpRouter = require("./signup/signup");
const router = Router();

router.use("/signup", signUpRouter);

module.exports = router;
