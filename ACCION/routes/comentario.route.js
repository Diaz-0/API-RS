const express = require("express");
const router = express.Router();
const comentarioController = require("../controllers/comentario.controller");

// Rutas relacionadas con comentarios
router.post("/crear", comentarioController.crearComentario);
router.get("/publicacion/:idPublicacion", comentarioController.obtenerComentariosPorPublicacion);

module.exports = router;
