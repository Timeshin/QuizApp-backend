import userServices from "../services/UserService.js"

class UserController {
    async registration(req, res) {
        try {
            const userData = await userServices.registration(req, res)
            res.cookie("refreshToken", userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                secure: true
            })
            return res.json(userData)
        } catch (e) {
            res.status(500).json({
                message: "Registration error"
            })
        }
    }

    async login(req, res) {
        try {
            const token = await userServices.login(req, res)
            return res.json({
                token
            })
        } catch (e) {
            res.status(500).json({
                message: "Login error"
            })
        }
    }
}

export default new UserController