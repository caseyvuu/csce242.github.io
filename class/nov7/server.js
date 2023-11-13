//npm init --yes, npm i express, npm i joi, npm i cors, npm i multer, nodemon server.js
const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());

const upload = multer({ dest: __dirname + "/public/images" });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3004, () => {
    console.log("I'm listening");
});