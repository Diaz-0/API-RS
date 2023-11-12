const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const { API_VERSION, IP_SERVER } = require("./constants");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Configuración de las rutas
app.get("/", (req, res) => {
  res.send("¡Bienvenido a tu API MySQL!");
});

// Puedes agregar más rutas aquí...

module.exports = app;
