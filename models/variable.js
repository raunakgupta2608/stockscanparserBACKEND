const mongoose = require("mongoose");
const { VariableObject } = require("./variableObject");
const Schema = mongoose.Schema;

const variableSchema = new Schema({
  variableID: {
    type: String,
    of: VariableObject,
  },
});

var Variables = mongoose.model("Variables", variableSchema);

module.exports.Variables = Variables;
