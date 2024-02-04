const { Contact } = require("../../models");

const getAllContacts = async (req, res, next) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const allContacts = await Contact.find({ owner }, "-updatedAt", {
    skip,
    limit,
  }).populate("owner", "email");

  res.status(200).json(allContacts);
};

module.exports = getAllContacts;
