const ErrorFormatter = require("../Middleware/ErrorFormatter");
const User = require("../Model/User.model")

module.exports.CreateUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json({
            "status": 200,
            "message": "user created successfully!",
            "data": user
        })
    } catch (error) {
        res.json({
            "status": 400,
            "message": "user not created!",
            "errors" : ErrorFormatter(error.message)
        })
    }
}

module.exports.GetAllUser = async (req,res) => {
    try {
        const user = await User.find({});
        res.json({
            "status": 200,
            "message": `user found ${user.length}`,
            "data": user
        })
    } catch (error) {
        res.json({
            "status": 400,
            "message": "user not found!",
        })
    }
}