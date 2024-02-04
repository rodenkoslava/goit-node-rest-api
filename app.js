const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const { DB_ADMIN_NAME, DB_ADMIN_PASSWORD, DB_CLUSTER_NAME, DB_COLLECTION } =
  process.env;

const DB_HOST_NEW = `mongodb+srv://${DB_ADMIN_NAME}:${DB_ADMIN_PASSWORD}@${DB_CLUSTER_NAME}.mongodb.net/${DB_COLLECTION}`;

const { authRouter } = require("./routes");
const { contactsRouter } = require("./routes");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/users", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

const PORT = 3000;

mongoose
  .connect(DB_HOST_NEW)
  .then(() => console.log("Database connection successful"))
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running. Use our API on port: ${PORT}`)
    )
  )
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
