const express = require("express")
const app = express()
const AuthController = require("../controller/AuthController")

app.post("/register", AuthController.register)

module.exports = app