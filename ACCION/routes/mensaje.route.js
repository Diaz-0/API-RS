const express = require("express");
const router = express.Router();
const mensajeController = require("../controllers/mensaje.controller");

// Rutas relacionadas con mensajes
router.post("/enviar", mensajeController.enviarMensaje);
router.get("/conversacion/:idUsuario1/:idUsuario2", mensajeController.obtenerConversacion);

module.exports = router;