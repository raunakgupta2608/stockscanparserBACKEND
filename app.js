const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mprglobalsolutions", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(`Connected to MongoDB...`))
  .catch((err) => console.error("Couldn't connect to MongoDB... ", err));

const userRoute = require("./routes/users");
const auth = require("./routes/auth");

const app = express();
app.use(express.json());

app.use("/users", userRoute);
app.use("/auth", auth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
