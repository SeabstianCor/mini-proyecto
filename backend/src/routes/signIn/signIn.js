const { Router } = require("express");
const { authorization } = require("../../middleware/authorization");
const router = Router();
const { signIn, verifyToken } = require("./signIn.controller");

router.post("/", signIn);
router.get("/user", verifyToken);

module.exports = router;
