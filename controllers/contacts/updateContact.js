const { HttpError } = require("../../helpers");
const { Contact } = require("../../models");

const updateContact = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;
  const changeContact = await Contact.findOneAndUpdate(
    {
      _id: id,
      owner: _id,
    },
    req.body,
    { new: true }
  );
  if (!changeContact) {
    throw HttpError(404);
  }
  res.status(200).json(changeContact);
};

module.exports = updateContact;
