const Contact = require("../../models");

const getAllContacts = async (req, res, next) => {
  const allContacts = await Contact.find();
  res.status(200).json(allContacts);
};

module.exports = getAllContacts;
