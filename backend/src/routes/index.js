const { Router } = require("express");
const signUpRouter = require("./signup/signup");
const signInRouter = require("./signIn/signIn");
const productRouter = require("./product/product");
const router = Router();

router.use("/signup", signUpRouter);
router.use("/signin", signInRouter);
router.use("/product", productRouter);

module.exports = router;
