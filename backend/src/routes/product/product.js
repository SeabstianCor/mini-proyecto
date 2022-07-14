const { Router } = require("express");
const router = Router();
const { product, authorization } = require("./product.controller");

router.post("/create", product);

module.exports = router;
