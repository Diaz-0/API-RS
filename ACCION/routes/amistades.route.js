const express = require("express");
const router = express.Router();
const amistadesController = require("../controllers/amistades.controller");

// Rutas relacionadas con amistades
router.post("/enviar-solicitud", amistadesController.enviarSolicitudAmistad);
router.post("/solicitud", amistadesController.gestionarSolicitudAmistad);

module.exports = router;
