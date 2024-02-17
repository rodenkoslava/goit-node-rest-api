const { HttpError, sendEmail } = require("../../helpers");
const { User } = require("../../models");

const { BASE_URL } = process.env;

const resentVerifyEmail = async (req, res) => {
  const { email } = req.body;

  if (!req.body) {
    res.status(400).json({ message: "Missing required field email" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email not found");
  }

  if (user.verify) {
    res.status(400).json({
      message: "Verification has already been passed",
    });
  }

  const verifyEmail = {
    to: email,
    subject: "Verification email sent",
    html: `<a target="_blank" href="${BASE_URL}users/verify/${user.verificationToken}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(200).json({
    message: "Verification email sent",
  });
};

module.exports = resentVerifyEmail;
