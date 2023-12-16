// routes/UserS.route.js
const express = require("express");
const UserController = require("../controllers/userS.controller");
const authenticateToken = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/users", authenticateToken, UserController.getAllUsers); // Nuevo endpoint para obtener todos los usuarios
router.get("/users/:id", authenticateToken, UserController.getUserById);

module.exports = router;
