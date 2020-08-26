require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://vikas-admin:atlasPassword@cluster0.xbah5.mongodb.net/ToDoApp", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected")
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome Human !</h1>");
});

app.use("/todos", router);

app.listen(process.env.PORT, () => console.log(`Server Started on ${process.env.PORT}`));
