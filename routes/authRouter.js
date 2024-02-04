const express = require("express");
const { validateBody } = require("../helpers");
const { authSchema } = require("../schemas");
const { register, login, getCurrent, logout } = require("../controllers/auth");
const { authdentificate } = require("../middlewares");

const authRouter = express.Router();

authRouter.post("/register", validateBody(authSchema), register);

authRouter.post("/login", validateBody(authSchema), login);

authRouter.get("/current", authdentificate, getCurrent);

authRouter.post("/logout", authdentificate, logout);

module.exports = authRouter;
