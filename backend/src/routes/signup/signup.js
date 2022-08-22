const { Router } = require("express");
const router = Router();
const signUp = require("./signup.controller");

router.post("/", signUp);

module.exports = router;
