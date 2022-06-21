const { Router } = require("express");
const signUpRouter = require("./signup/signup");
const signInRouter = require("./signIn/signIn");
const router = Router();

router.use("/signup", signUpRouter);
router.use("/signin", signInRouter);

module.exports = router;
