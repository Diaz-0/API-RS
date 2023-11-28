const express = require("express");
const router = express.Router();
const paisController = require("../controllers/pais.controller");

// Rutas relacionadas con países
router.post("/crear", paisController.crearPais);
router.get("/obtener", paisController.obtenerPaises);

module.exports = router;