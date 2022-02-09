import User from "../models/User.js";
import Role from "../models/Role.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import TokenService from "./TokenService.js";

class UserServices {
    async registration(req, res) {
        const {
            username,
            password
        } = req.body
        const candidate = await User.findOne({
            username
        })
        if (candidate) {
            return res.status(400).json({
                message: `user with name '${username}' does exist`
            })
        }
        const hashPassword = bcrypt.hashSync(password, 7);
        const userRole = await Role.findOne({
            value: "user"
        })
        const user = new User({
            username,
            password: hashPassword,
            role: userRole.value
        })

        const userDto = {
            _id: user._id,
            username: user.username,
            role: user.role
        }

        const tokens = TokenService.generateTokens({...userDto})
        
        await TokenService.saveToken(userDto._id, tokens.refreshToken)
        await user.save()

        return {
            ...tokens,
            user: userDto
        }
    }

    async login(req, res) {
        const {
            username,
            password
        } = req.body
        const user = await User.findOne({
            username
        })
        if (!user) {
            return res.status(400).json({
                message: `User ${username} doesn't exist`
            })
        }
        const validPassword = bcrypt.compareSync(password, user.password)

        if (!validPassword) {
            return res.status(400).json({
                message: "Password is not correct"
            })
        }
        const token = generateAccessToken(user._id, user.role)

        return token
    }
}

export default new UserServices()