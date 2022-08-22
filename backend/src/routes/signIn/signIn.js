const { Router } = require("express");
const router = Router();
const signIn = require("./signIn.controller");

router.post("/", signIn);

module.exports = router;
