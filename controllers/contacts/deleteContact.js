const { HttpError } = require("../../helpers");
const Contact = require("../../models");

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const removedContact = await Contact.findByIdAndDelete(id);
  if (!removedContact) {
    throw HttpError(404);
  }
  res.status(200).json(removedContact);
};

module.exports = deleteContact;
