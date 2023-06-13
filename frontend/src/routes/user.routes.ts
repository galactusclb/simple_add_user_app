import Users from "@pages/auth/Users"
import { NotFound } from "pages/NotFound"

const routes = [
    {
        path: "/",
        redirectTo: "/users"
    },
    {
        path: "/users",
        component: Users
    },
    {
        path: "*",
        component: NotFound
    },
]

export default routes
