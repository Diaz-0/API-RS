const express = require("express");
const router = express.Router();
const imagenController = require("../controllers/imagen.controller");

// Ruta para subir una imagen
router.post("/subir", imagenController.subirImagen);

module.exports = router;