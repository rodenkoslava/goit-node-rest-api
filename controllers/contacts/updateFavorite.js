const { HttpError } = require("../../helpers");
const { Contact } = require("../../models");

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;
  const { _id } = req.user;

  if (favorite === undefined) {
    return res.status(400).json({ message: "missing field favorite" });
  }

  const existingContact = await Contact.findOne({ _id: id });

  if (!existingContact) {
    throw HttpError(404);
  }

  if (existingContact.favorite === favorite) {
    return res
      .status(400)
      .json({ message: "new favorite value is the same as the current value" });
  }

  const updateStatusContact = await Contact.findOneAndUpdate(
    { _id: id },
    { $set: { favorite } },
    { new: true }
  );

  if (!updateStatusContact) {
    throw HttpError(404);
  }

  res.status(200).json(updateStatusContact);
};

module.exports = updateFavorite;
