const { Router } = require("express");
const router = Router();
const { create, view, update, remove } = require("./product.controller");
const { authorization, privilege } = require("../../middleware/authorization");

router.get("/read", authorization, view);
router.post("/create", authorization, create);
router.put("/update/:id", privilege, update);
router.delete("/delete/:id", privilege, remove);

module.exports = router;
