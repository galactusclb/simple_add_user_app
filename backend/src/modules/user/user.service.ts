
import { excludeProperties } from "@utils/common-helper"
import { ForbiddenError } from "@utils/api-errors"
import { withTransaction } from "@utils/mongoose-helper"

import { UserModel } from "./user.model"
import { generateHashPassword } from "./user.utils"
import { User } from "./user.type"

export const doCreateUser = withTransaction(async (
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
