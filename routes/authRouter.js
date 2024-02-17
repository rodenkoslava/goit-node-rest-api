const express = require("express");
const { validateBody } = require("../helpers");
const { authSchema, emailSchema } = require("../schemas");
const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
  verifyEmail,
  resentVerifyEmail,
} = require("../controllers/auth");
const { authdentificate, upload } = require("../middlewares");

const authRouter = express.Router();

authRouter.post("/register", validateBody(authSchema), register);

authRouter.get("/verify/:verificationToken", verifyEmail);

authRouter.post("/verify", validateBody(emailSchema), resentVerifyEmail);

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
