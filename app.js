const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost/azularc", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(`Connected to MongoDB...`))
  .catch((err) => console.error("Couldn't connect to MongoDB... ", err));

const userRoute = require("./routes/users");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoute);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
