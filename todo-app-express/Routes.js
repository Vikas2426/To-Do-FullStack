const express = require("express");
const router = express.Router();
const dbModel = require("./TodoSchema");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const entries = await dbModel.find();
      res.json(entries);
    } catch (error) {
      console.log(error.name);
    }
  })
  .post(async (req, res) => {
    try {
      const newToDo = new dbModel(req.body);
      await newToDo.save();
      const entries = await dbModel.find();
      res.json(entries);
    } catch (error) {
      console.log(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const id = req.body._id;
      await dbModel.deleteOne({ _id: id });
      const entries = await dbModel.find();
      res.json(entries);
    } catch (error) {
      console.log(error.name);
    }
  });

module.exports = router;
