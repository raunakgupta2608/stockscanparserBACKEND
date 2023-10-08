const mongoose = require("mongoose");
const { Criteria } = require("./criteria");
const Schema = mongoose.Schema;

const stockSchema = new Schema([
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    criteria: {
      type: Criteria.schema,
    },
  },
]);

var Stocks = mongoose.model("Stocks", stockSchema);

module.exports.Stocks = Stocks;
