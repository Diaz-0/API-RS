const db = require("../../CONECCION/db");

class UserController {
async getAllUsers(req, res) {
  try {
    const query = "SELECT * FROM Usuario";
    const users = await db.query(query);

    res.json(users[0]);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
}


async getUserById(req, res) {
    const idUsuario = req.params.id;
  
    try {
      const query = "SELECT * FROM Usuario WHERE idUsuario = ?";
      const [user] = await db.query(query, [idUsuario]);
  
      if (user.length > 0) {
        res.json(user[0]);
      } else {
        res.status(404).json({ message: "Usuario no encontrado o eliminado" });
      }
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
      res.status(500).json({ error: "Error al obtener el usuario" });
    }
  }
  

  async createUser(req, res) {
    const newUser = req.body;

    try {
      const query = "INSERT INTO Usuario SET ?";
      const createdUser = await db.query(query, [newUser]);
      res.status(201).json({ id: createdUser.insertId, ...newUser });
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      res.status(500).json({ error: "Error al crear el usuario" });
    }
  }

  async updateUser(req, res) {
    const idUsuario = req.params.id;
    const userData = req.body;

    try {
      const query = "UPDATE Usuario SET ? WHERE idUsuario = ?";
      await db.query(query, [userData, idUsuario]);
      res.json({ id: idUsuario, ...userData });
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      res.status(500).json({ error: "Error al actualizar el usuario" });
    }
  }

  async deleteUser(req, res) {
    const idUsuario = req.params.id;

    try {
      const query = "DELETE FROM Usuario WHERE idUsuario = ?";
      await db.query(query, [idUsuario]);
      res.json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
      res.status(500).json({ error: "Error al eliminar el usuario" });
    }
  }
}

module.exports = new UserController();
