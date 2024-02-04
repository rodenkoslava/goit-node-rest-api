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
const { isValidId, authdentificate } = require("../middlewares");

const contactsRouter = express.Router();

contactsRouter.get("/", authdentificate, getAllContacts);

contactsRouter.get("/:id", authdentificate, isValidId, getContactById);

contactsRouter.delete("/:id", authdentificate, isValidId, deleteContact);

contactsRouter.post(
  "/",
  authdentificate,
  validateBody(createContactSchema),
  createContact
);

contactsRouter.put(
  "/:id",
  authdentificate,
  validateBody(updateContactSchema),
  isValidId,
  updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  authdentificate,
  validateBody(favoriteSchema),
  isValidId,
  updateFavorite
);

module.exports = contactsRouter;
