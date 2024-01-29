const express = require("express");
const {
  getAllContacts,
  getContactById,
  deleteContact,
  createContact,
  updateContact,
  updateFavorite,
} = require("../controllers/contacts");
const { validateBody } = require("../helpers");
const {
  createContactSchema,
  updateContactSchema,
  favoriteSchema,
} = require("../schemas");
const isValidId = require("../middlewares");

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getContactById);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  isValidId,
  updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  validateBody(favoriteSchema),
  isValidId,
  updateFavorite
);

module.exports = contactsRouter;
