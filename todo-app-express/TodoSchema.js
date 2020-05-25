require("dotenv").config();
const mongoose = require("mongoose");

const toDoSchema = mongoose.Schema({
  content: {
    required: true,
    type: String,
  },

  dateTime: String,
});

const dbModel = mongoose.model("ToDo", toDoSchema);
module.exports = dbModel;
