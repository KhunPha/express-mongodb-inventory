const express = require("express")
const app = express()
const AuthController = require("../controller/AuthController")

app.post("/register", AuthController.register)
app.get("/", (req, res)=>{
    res.json({
        message: "Hello World"
    })
})

module.exports = app