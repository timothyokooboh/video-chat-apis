const mongoose = require("mongoose");

const RoomSchema = mongoose.Schema({
    room: {
        type: String,
        required: [true, "Please enter a room name"],
        unique: true
    },
    userId: {
        type: String,
        required: [true, "Please provide a userId"]
    }
},
{timestamp: true}
)


module.exports = mongoose.model("Room", RoomSchema)