
import { Controller } from "middlewares/make-express-callback.middleware";

import { InternalServerError } from "utils/api-errors";

import { doCreateUser } from "./user.service";

export const createUser: Controller = async (httpRequest) => {
    const {
        email,
        firstName,
        lastName,
        password
    } = httpRequest.body

    const userResult = await doCreateUser(email, password, firstName, lastName)

    if (!userResult || !userResult.userDoc._id) {
        throw new InternalServerError()
    }

    return {
        statusCode: 201,
        body: {
            success: true,
            data: {
                userDoc: userResult?.userDoc,
            },
            message: "New user successfully added"
        }
    }
}

