const db = require("../../CONEXION/db");

class PerfilController {
  async getPerfilByIdPerfil(req, res) {
    const idperfil = req.params.id;

    try {
      const userId = req.user.userId;

      const query = `
        SELECT Perfil.*, Usuario.Nombre_User, Usuario.Correo_Elec, Usuario.Nombre, Usuario.Apellidos
        FROM Perfil
        JOIN Usuario ON Perfil.idUsuario = Usuario.idUsuario
        WHERE Perfil.idperfil = ? AND Perfil.idUsuario = ?;
      `;
      
      const perfil = await db.query(query, [idperfil, userId]);

      if (perfil[0].length === 0) {
        return res.status(404).json({ error: "Perfil no encontrado" });
      }

      res.json(perfil[0][0]);
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
      return res.status(500).json({ error: "Error al obtener el perfil" });
    }
  }

  async getAllPerfiles(req, res) {
    try {
      const query = "SELECT * FROM Perfil";
      const perfiles = await db.query(query);

      res.json(perfiles[0]);
    } catch (error) {
      console.error("Error al obtener todos los perfiles:", error);
      return res.status(500).json({ error: "Error al obtener todos los perfiles" });
    }
  }

  async updatePerfil(req, res) {
    const idperfil = req.params.id;
    const updatedPerfilData = req.body;

    try {
      const userId = req.user.userId;

      const query = "UPDATE Perfil SET ? WHERE idperfil = ? AND idUsuario = ?";
      const result = await db.query(query, [updatedPerfilData, idperfil, userId]);

      if (result[0].affectedRows === 0) {
        return res.status(404).json({ error: "Perfil no encontrado" });
      }

      res.json({ idperfil, ...updatedPerfilData });
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      return res.status(500).json({ error: "Error al actualizar el perfil" });
    }
  }
}

module.exports = new PerfilController();