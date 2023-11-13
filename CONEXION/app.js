const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { API_VERSION } = require("./constants");

const userRoutes = require("../ACCION/routes/user.route");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(`/api/${API_VERSION}/user`, userRoutes);



module.exports = app;
