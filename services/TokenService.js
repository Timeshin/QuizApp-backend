import jsonwebtoken from "jsonwebtoken"
import tokenModel from "../models/tokenModel.js"

class TokenService {
    generateTokens(payload) {
        const accessToken = jsonwebtoken.sign(payload, "jwt-secret-key", {
            expiresIn: "24h"
        })
        const refreshToken = jsonwebtoken.sign(payload, "jwt-refresh-secret-key", {
            expiresIn: "30d"
        })
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({user: userId})
        if(tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await tokenModel.create({user: userId, refreshToken})
        return token
    }
}

export default new TokenService()