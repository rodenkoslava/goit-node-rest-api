const { ctrlWrapper } = require("../../helpers");
const register = require("./register");
const verifyEmail = require("./verifyEmail");
const resentVerifyEmail = require("./resentVerifyEmail");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register: ctrlWrapper(register),
  verifyEmail: ctrlWrapper(verifyEmail),
  resentVerifyEmail: ctrlWrapper(resentVerifyEmail),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateAvatar: ctrlWrapper(updateAvatar),
};
