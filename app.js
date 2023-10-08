const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost/stockscanparser", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(`Connected to MongoDB...`))
  .catch((err) => console.error("Couldn't connect to MongoDB... ", err));

const app = express();

app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);

const stockRoute = require("./routes/stocks");

app.use(cors());
app.use(express.json());

app.use("/stocks", stockRoute);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
