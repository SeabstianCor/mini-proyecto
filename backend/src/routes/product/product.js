const { Router } = require("express");
const router = Router();
const { create, view, update, remove } = require("./product.controller");
const { authorization, privilege } = require("../../middleware/authorization");

// router.post("/create", authorization, create);
// router.get("/read", authorization, view);
// router.put("/update/:id", authorization, privilege, update);
// router.delete("/delete/:id", authorization, privilege, remove);

router.post("/create", create);
router.get("/read", view);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

module.exports = router;
