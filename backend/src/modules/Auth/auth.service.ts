
import { constants } from "@utils/constants"
import { excludeProperties } from "@utils/common-helper"
import { AccessDeniedError, ForbiddenError, NotFoundError, UnauthorizedError } from "@utils/api-errors"
import { withTransaction } from "@utils/mongoose-helper"

import { RefreshTokenModel } from "./models"
import { UserModel } from "./models/user.model"
import { generateHashPassword, verifyHashPassword } from "./auth.utils"
import { User } from "./types/user.type"
import { RefreshToken } from "./types/refresh-token.type"

export const doSignup = withTransaction(async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    session
): Promise<{ userDoc: User } | undefined> => {

    const hasUser = await UserModel.findOne({ email })

    if (hasUser) {
        throw new ForbiddenError("Can't create a user with that credential.")
    }

    const hashedPassword = await generateHashPassword(password);

    let userDoc = new UserModel({
        email,
        firstName,
        lastName,
        password: hashedPassword
    })

    await userDoc.save({ session })

    userDoc = excludeProperties(userDoc, ["password", "createdAt", "updatedAt"])

    return {
        userDoc
    }
})

export const doLogin = withTransaction(async (userName: string, password: string, session): Promise<{
    userDoc: User,
    refreshTokenDoc: RefreshToken
} | undefined> => {

    let userDoc = await UserModel.findOne({ userName }).select("+password").lean()

    if (!userDoc) {
        throw new NotFoundError("User not found")
    }

    const isMatched = await verifyHashPassword(password, userDoc?.password)

    if (!isMatched) {
        throw new AccessDeniedError("The entered username or password is not valid. Please check your credentials and try again.")
    }

    const refreshTokenDoc = new RefreshTokenModel({
        owner: userDoc._id
    })

    await refreshTokenDoc.save({ session })

    userDoc = excludeProperties(userDoc, ["password", "createdAt", "updatedAt"])

    return {
        userDoc,
        refreshTokenDoc
    }
})
