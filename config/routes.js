var express = require("express"),
    router = new express.Router();

var usersController = require("../controllers/users");


router.get("/users", usersController.index);
router.post("/users", usersController.create);

module.exports = router;
