const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "fullName is required!"],
        minLength: [4, "fullName should be more than 3 character!"],
        maxLength: [30, "fullName shouldn't be more than 30 character!"]
    },
    dob: {
        type: Date,
        required: [true, "date of birth is required!"],
        validate: [validator.isDate, "provide valid date!"],
    },
    email: {
        type: String,
        required: [true, "email is required!"],
        unique: true,
        validate: [validator.isEmail, "provide valid email!"],
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        unique: true,
        required: [true, "phone number is required!"],
    },
}, {
    timestamps: true
})

uniqueValidator.defaults.message = '{PATH} {VALUE} already exist!'
userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);
module.exports = User