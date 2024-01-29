const { ctrlWrapper } = require("../../helpers");
const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const deleteContact = require("./deleteContact");
const createContact = require("./createContact");
const updateContact = require("./updateContact");
const updateFavorite = require("./updateFavorite");

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  updateFavorite: ctrlWrapper(updateFavorite),
};
