const mongoose = require("mongoose");
const { Variables } = require("./variable");
const Schema = mongoose.Schema;

const criteriaSchema = new Schema({
  type: {
    type: String,
  },
  text: {
    type: String,
  },
  variable: {
    type: Variables.schema,
  },
});

var Criteria = mongoose.model("Criteria", criteriaSchema);

module.exports.Criteria = Criteria;
