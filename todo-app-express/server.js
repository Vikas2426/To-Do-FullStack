require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./Routes");

const app = express();
const dbUrl = process.env.DATABASE_URL;
const serverPort = 3001;

app.use(cors());
app.use(express.json());

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((error) => {
    console.log(error.name);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome Human !</h1>");
});

app.use("/todos", router);

app.listen(serverPort, () => console.log(`Server Started on ${serverPort}`));
