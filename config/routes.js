var express = require("express"),
    router = new express.Router();

var usersController = require("../controllers/users");


router.get("/users", usersController.index);
router.get("/users/:id", usersController.show);
router.post("/users", usersController.create);
router.put("/users/:id", usersController.update);
router.delete("/users/:id", usersController.destroy);

module.exports = router;
