const mongoose = require("mongoose");
const Joi = require("joi");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  dob: {
    type: String,
    minlength: 10,
    maxlength: 10,
  },
  address: {
    type: String,
    minlength: 3,
    maxlength: 30,
  },
  photo: {
    type: String,
    required: false,
  },
});

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50),
    email: Joi.string().min(5).max(50).required().email(),
    dob: Joi.string().min(10).max(10),
    address: Joi.string().min(3).max(30),
    photo: Joi.string().allow("").optional(),
  });

  return schema.validate(user);
}

var Users = mongoose.model("Users", userSchema);

module.exports.Users = Users;
module.exports.validate = validateUser;
