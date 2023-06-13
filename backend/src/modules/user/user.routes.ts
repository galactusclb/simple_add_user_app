import express, { Router } from "express"

import { makeExpressCallback, makeValidatorCallback } from "middlewares"
import { createUser } from "./user.controller"
import { validateRegister } from "./user.validator"

const route: Router = express.Router()

route.post("/user", makeValidatorCallback(validateRegister), makeExpressCallback(createUser))

export default route