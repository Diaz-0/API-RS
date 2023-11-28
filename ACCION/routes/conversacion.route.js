const express = require("express");
const router = express.Router();
const conversacionController = require("../controllers/conversacion.controller");

// Rutas relacionadas con conversaciones
router.post("/crear/:idMensaje", async (req, res) => {
  const { idMensaje } = req.params;
  const result = await conversacionController.crearConversacion(idMensaje);
  res.json(result);
});

module.exports = router;
