const Room = require("../model/Room");

exports.createRoom = async(req, res) => {
    try {
        const room = Room({
            room: req.body.room,
            userId: req.body.userId
        })

        const savedRoom = await room.save();

        res.status(201).json({
            status: "success",
            data: {
                room: savedRoom
            }
        })
    }
    catch(err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.sendRooms = async(req, res) => {
    try {
        const rooms = await Room.find();

        res.status(200).json({
            data: {rooms}
        })
    }
    catch(err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

// check if the room was created by the user 
exports.verifyUser = async(req, res, next) => {
    const room = await Room.findById(req.params.id);

    if(!room) {
        return res.status(400).json({
            status: "fail",
            message: "Room not found"
        })
   
    }  else if(req.params.userId != room.userId) {
        return res.status(400).json({
            status: "fail",
            message: "You are unauthorized to delete this room"
        })
    } else {
        next()
    }
}

exports.deleteRoom = async(req, res) => {
    try {
        const room = await Room.findByIdAndDelete(req.params.id);

        res.status(204).json({
            data: {room}
        })
    }
    catch(err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}