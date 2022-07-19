const { Router } = require("express");
const router = Router();
const { create, view, update, remove } = require("./product.controller");
const authorization = require("../../middleware/authorization");

router.get("/read", authorization, view);
router.post("/create", authorization, create);
router.put("/update", authorization, update);
router.delete("/delete", authorization, remove);

module.exports = router;
