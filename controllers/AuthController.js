const User = require("../model/User");

// CHECK IF USER ALREADY EXIST
exports.findUser = async(req, res, next) => {
    const user = await User.findOne({username: req.body.username})

    if(user) {
        return res.status(200).json({
            status: "success",
            data: {user}
        })
    } else {
        next()
    }
}

exports.createUser = async (req, res) => {
    try {
        const user = User({
            username: req.body.username
        })

        const savedUser = await user.save();

        res.status(201).json({
            status: "success",
            data: {
                user: savedUser
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