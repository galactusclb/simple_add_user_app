import express, { Router } from 'express';

import userRouter from "modules/user/user.routes"

const router: Router = express.Router();

const BASE_ROUTE = "/api/v1"

const routes:
    {
        path: string,
        route: Router
    }[] = [
        {
            path: '/users',
            route: userRouter
        },
    ]

routes?.forEach((route) => {
    router.use(BASE_ROUTE + route.path, route.route);
})

export default router;