const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const secretKey = "my-secret-key"

const userService = require("../service/userService");
const { authenticateToken } = require("../util/jwt");

router.post("/", validatePostUser, async (req, res) => {
    const data = await userService.postUser(req.body);
    if(data){
        res.status(201).json({message: `Created User ${JSON.stringify(data)}`});
    }else{
        res.status(400).json({message: "user not created", data: req.body});
    }
} )

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const data = await userService.validateLogin(username, password);
    if(data){
        const token = jwt.sign(
            {
                id: data.user_id,
                username
            },
            secretKey,
            {
                expiresIn: "15m"
            }
        );
        res.status(200).json({message: "you have logged in", token});
    }else{
        res.status(401).json({message: "invalid login"});
    }
})


function validatePostUser(req, res, next){
    const user = req.body;
    if(user.username && user.password){
        next();
    }else{
        res.status(400).json({message: "invalid username or password", data: user});
    }
}

module.exports = router;