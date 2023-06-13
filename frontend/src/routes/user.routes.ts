import Signup from "@pages/auth/Signup"
import { NotFound } from "pages/NotFound"

const routes = [
    {
        path: "/",
        redirectTo: "/login"
    },
    {
        path: "/signup",
        component: Signup
    },
    {
        path: "*",
        component: NotFound
    },
]

export default routes
