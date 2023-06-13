
import { Controller } from "middlewares/make-express-callback.middleware";

import { InternalServerError } from "utils/api-errors";

import { doSignup } from "./auth.service";

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

