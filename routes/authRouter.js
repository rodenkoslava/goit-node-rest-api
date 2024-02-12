const express = require("express");
const { validateBody } = require("../helpers");
const { authSchema } = require("../schemas");
const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
} = require("../controllers/auth");
const { authdentificate, upload } = require("../middlewares");

const authRouter = express.Router();

authRouter.post("/register", validateBody(authSchema), register);

authRouter.post("/login", validateBody(authSchema), login);

authRouter.get("/current", authdentificate, getCurrent);

authRouter.post("/logout", authdentificate, logout);

authRouter.patch(
  "/avatars",
  authdentificate,
  upload.single("avatar"),
  updateAvatar
);

module.exports = authRouter;
