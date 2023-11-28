const express = require("express");
const router = express.Router();
const estadoController = require("../controllers/estado.controller");

// Rutas relacionadas con estados
router.post("/crear", estadoController.crearEstado);
router.get("/obtener", estadoController.obtenerEstados);

module.exports = router;