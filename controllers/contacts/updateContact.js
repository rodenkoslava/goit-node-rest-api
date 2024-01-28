const Contact = require("../../models");

const updateContact = async (req, res) => {
  const { id } = req.params;
  const changeContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!changeContact) {
    throw HttpError(404);
  }
  res.status(200).json(changeContact);
};

module.exports = updateContact;
