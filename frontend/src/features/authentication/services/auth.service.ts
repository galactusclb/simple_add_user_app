import { AxiosError, AxiosResponse } from "axios"
import { getApi } from "lib/fetch"
import { buildResponse } from "utils/responseBuilder"

export const doCreateUser = async (payload: {
    email: string,
    userName: string,
    password: string,
}) => {
    return await getApi().post("/auth/signup", payload)
        .then((res: AxiosResponse) => {
            return buildResponse(true, res.data)
        })
        .catch((err: AxiosError) => {
            return buildResponse(false, err.response?.data, err.response?.status)
        })
}