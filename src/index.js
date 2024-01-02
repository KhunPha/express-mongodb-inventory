const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const app = express()

const AuthRoute = require("./routes/AuthRoute")

dotenv.config()

require("./db")


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.json({
        message: "Home Now"
    })
})

app.use("/user", AuthRoute)

app.listen(process.env.PORT, () => {
    console.log("http://localhost:" + process.env.PORT)
})