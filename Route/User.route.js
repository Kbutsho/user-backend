const express = require('express');
const { CreateUser, GetAllUser } = require('../Controller/User.controller');

const userRouter = express.Router();

userRouter.route('/')
.post(CreateUser)
.get(GetAllUser)


module.exports = userRouter