const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const variableObjectSchema = new Schema({
  type: {
    type: String,
  },
  values: {
    type: Array,
  },
  study_type: {
    type: String,
  },
  parameter_name: {
    type: String,
  },
  min_value: {
    type: Number,
  },
  max_value: {
    type: Number,
  },
  default_value: {
    type: Number,
  },
});

var VariableObject = mongoose.model("VariableObject", variableObjectSchema);

module.exports.VariableObject = VariableObject;
