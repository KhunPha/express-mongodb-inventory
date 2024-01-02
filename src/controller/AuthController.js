const User = require("../model/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const UserController = {
    register: async (req, res) => {
        try {
            const {
                email,
                fullname,
                username,
                password,
                role
            } = req.body

            const salt = await bcrypt.genSalt()
            const hashPassword = await bcrypt.hash(password, salt)

            const newRegister = new User({
                email,
                fullname,
                username,
                password: hashPassword,
                role
            })

            await newRegister.save()
            res.status(202).json(newRegister)
        } catch (error) {
            res.status(401).json({
                error: true,
                message: error.message
            })
        }
    }
}

module.exports = UserController