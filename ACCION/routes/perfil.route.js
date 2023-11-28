const express = require("express");
const router = express.Router();
const PerfilController = require("../controllers/perfil.controller");
const authenticateToken = require("../middlewares/auth.middleware");

router.get("/:id", authenticateToken, PerfilController.getPerfilByIdPerfil);
router.get("/", authenticateToken, PerfilController.getAllPerfiles);
router.put("/:id", authenticateToken, PerfilController.updatePerfil);

module.exports = router;