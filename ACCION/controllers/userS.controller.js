const db = require("../../CONEXION/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../../CONEXION/constants");
const authenticateToken = require("../middlewares/auth.middleware");

class UserController {
  async register(req, res) {
    try {
      const { Nombre_User, Correo_Elec, Contraseña, Nombre, Apellidos } = req.body;

      const userExistsQuery = "SELECT * FROM Usuario WHERE Nombre_User = ?";
      const [existingUser] = await db.query(userExistsQuery, [Nombre_User]);

      if (existingUser.length > 0) {
        return res.status(400).json({ error: "El nombre de usuario ya está en uso" });
      }

      const newUser = { Nombre_User, Correo_Elec, Contraseña, Nombre, Apellidos, activo: true };

      const insertUserQuery = "INSERT INTO Usuario SET ?";
      const [createdUser] = await db.query(insertUserQuery, [newUser]);

      const userId = createdUser.insertId;

      const existingPerfilQuery = "SELECT * FROM Perfil WHERE idUsuario = ?";
      const [existingPerfil] = await db.query(existingPerfilQuery, [userId]);

      if (existingPerfil.length === 0) {
        const newPerfil = { idUsuario: userId /* otras propiedades de perfil */ };
        const insertPerfilQuery = "INSERT INTO Perfil SET ?";
        await db.query(insertPerfilQuery, [newPerfil]);
      }

      res.status(201).json({ id: userId, ...newUser });
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      res.status(500).json({ error: "Error al crear el usuario" });
    }
  }

  async login(req, res) {
    const { Nombre_User, Contraseña } = req.body;

    try {
      const query = "SELECT * FROM Usuario WHERE Nombre_User = ? AND Contraseña = ?";
      const user = await db.query(query, [Nombre_User, Contraseña]);

      if (user[0].length === 0) {
        res.status(401).json({ error: "Credenciales inválidas" });
      } else {
        const token = jwt.sign({ userId: user[0][0].idUsuario }, JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      res.status(500).json({ error: "Error al iniciar sesión" });
    }
  }
  async getUserById(req, res) {
    try {
      const userId = req.params.id; // Obtener el ID del parámetro de la URL

      const query = "SELECT * FROM Usuario WHERE idUsuario = ?";
      const [user] = await db.query(query, [userId]);

      if (user.length === 0) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      res.json(user[0]);
    } catch (error) {
      console.error("Error al obtener el usuario por ID:", error);
      res.status(500).json({ error: "Error al obtener el usuario por ID" });
    }
  }
  async getAllUsers(req, res) {
    try {
      const query = "SELECT * FROM Usuario";
      const [users] = await db.query(query);

      res.json(users);
    } catch (error) {
      console.error("Error al obtener todos los usuarios:", error);
      res.status(500).json({ error: "Error al obtener todos los usuarios" });
    }
  }
}

module.exports = new UserController();