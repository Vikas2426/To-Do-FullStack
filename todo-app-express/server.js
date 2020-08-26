require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes");
const cors = require("cors");
const app = express();
const dbUrl = process.env.DATABASE_URL;
const serverPort = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
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

app.listen(serverPort, () => console.log(`Server Started on ${serverPort}`));
