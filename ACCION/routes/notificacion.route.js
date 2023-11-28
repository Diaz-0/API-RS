const express = require("express");
const router = express.Router();
const notificacionController = require("../controllers/notificacion.controller");

// Rutas relacionadas con notificaciones
router.post("/crear", notificacionController.crearNotificacion);
router.get("/obtener/:idperfil", notificacionController.obtenerNotificaciones);
router.put("/marcar-leida/:id_Notificacion", notificacionController.marcarComoLeida);

module.exports = router;