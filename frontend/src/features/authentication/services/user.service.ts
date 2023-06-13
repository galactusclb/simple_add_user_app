import { AxiosError, AxiosResponse } from "axios"
import { getApi } from "lib/fetch"
import { buildResponse } from "utils/responseBuilder"

export const doCreateUser = async (payload: {
    email: string,
    firstName: string,
    lastName: string,
    password: string,
}) => {
    return await getApi().post("/users/user", payload)
        .then((res: AxiosResponse) => {
            console.log(res);

            return buildResponse(true, res?.data)
        })
        .catch((err: AxiosError) => {
            return buildResponse(false, err?.response?.data, err?.response?.status)
        })
}