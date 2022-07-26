const { Router } = require("express");
const router = Router();
const { create, view, update, remove } = require("./product.controller");
const authorization = require("../../middleware/authorization");

router.get("/read", authorization, view);
router.post("/create", authorization, create);
router.put("/update/:id", authorization, update);
router.delete("/delete/:id", authorization, remove);

module.exports = router;
