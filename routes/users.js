const express = require("express");
const bodyParser = require("body-parser");
const userRouter = express.Router();
userRouter.use(bodyParser.json());

const { Users, validate } = require("../models/users");

userRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const users = await Users.find({});
      if (users) return res.status(200).send(users);
    } catch (error) {
      console.log(error);
      return res.status(404).send(error);
    }
  })
  .post(async (req, res) => {
    try {
      if (!validate(req.body).error) {
        const users = await Users.create(req.body);
        users.save();
        return res.status(201).send(users);
      }
    } catch (error) {
      console.log(error);
      return res.status(404).send(error);
    }
  })
  .put(async (req, res) => {
    return res.status(400).send("PUT operation not supported on /users");
  })
  .delete(async (req, res) => {
    return res.status(400).send("DELETE operation not supported on /users");
  });

userRouter
  .route("/:id")
  .get(async (req, res) => {
    try {
      const users = await Users.findById(req.params.id);
      if (!users)
        return res
          .status(404)
          .send("The user with the given ID was not found.");

      res.status(200).send({ users, message: "User Fetched successfully" });
    } catch (error) {
      console.log(error);
      return res.status(404).send(error);
    }
  })
  .post(async (req, res) => {
    return res.status(400).send("POST operation not supported on /users/:id");
  })
  .put(async (req, res) => {
    try {
      const users = await Users.findByIdAndUpdate(
        req.params.id,
        { ...req.body },
        { new: true }
      );
      if (!users)
        return res
          .status(404)
          .send("The user with the given ID was not found.");

      res.status(200).send({ users, message: "User Updated successfully" });
    } catch (error) {
      console.log(error);
      return res.status(404).send(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const users = await Users.findByIdAndRemove(req.params.id);
      if (!users)
        return res
          .status(404)
          .send("The user with the given ID was not found.");

      return res
        .status(200)
        .send({ users, message: "User deleted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(404).send(error);
    }
  });

module.exports = userRouter;
