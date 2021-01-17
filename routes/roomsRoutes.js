const router = require("express").Router();

const roomsController = require("../controllers/RoomsController");

router
.route("/")
.post(roomsController.createRoom)
.get(roomsController.sendRooms);

router
.route("/:id/:userId")
.delete(roomsController.verifyUser, roomsController.deleteRoom);

module.exports = router;