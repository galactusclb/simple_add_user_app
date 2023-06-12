
import { Controller } from "middlewares/make-express-callback.middleware";
import { doLogin, doSignup } from "./auth.service";
import { InternalServerError, UnauthorizedError } from "utils/api-errors";
import { createAccessToken, createRefreshToken, validateRefreshToken } from "./auth.utils";

export const signUp: Controller = async (httpRequest) => {
    const {
        email,
        firstName,
        lastName,
        password
    } = httpRequest.body

    const signupResult = await doSignup(email, password, firstName, lastName)

    if (!signupResult || !signupResult.userDoc._id) {
        throw new InternalServerError()
    }

    return {
        statusCode: 201,
        body: {
            success: true,
            data: {
                userDoc: signupResult?.userDoc,
            },
            message: "New user successfully added"
        }
    }
}

export const login: Controller = async (httpRequest) => {
    const { userName, password } = httpRequest.body

    const loginData = await doLogin(userName, password)

    if (!loginData || !loginData.userDoc._id || !loginData.refreshTokenDoc?._id) {
        throw new InternalServerError()
    }

    const accessToken = createAccessToken({
        tokenId: loginData.refreshTokenDoc?._id,
        userId: loginData.userDoc._id,
    })
    // const refreshToken = createRefreshToken(loginData.userDoc._id, loginData.refreshTokenDoc?._id)

    const refreshToken = createRefreshToken({
        tokenId: loginData.refreshTokenDoc?._id,
        userId: loginData.userDoc._id,
    })

    return {
        statusCode: 201,
        body: {
            success: true,
            data: {
                userDoc: loginData?.userDoc,
                refreshToken,
                accessToken
            }
        }
    }
}
