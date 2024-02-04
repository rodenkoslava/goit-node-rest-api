const { HttpError } = require("../../helpers");
const { Contact } = require("../../models");

const getContactById = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;
  const contactsById = await Contact.findOne({ _id: id, owner: _id });
  if (!contactsById) {
    throw HttpError(404);
  }
  res.status(200).json(contactsById);
};

module.exports = getContactById;
