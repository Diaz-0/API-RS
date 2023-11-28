const db = require("../../CONEXION/db");

class ComentarioController {
  async crearComentario(req, res) {
    const { contenido, idperfil, idPublicacion } = req.body;

    try {
      const result = await db.query("INSERT INTO Comentario SET ?", { contenido, idperfil, idPublicacion });

      res.json({
        idcomentario: result[0].insertId,
        contenido,
        fecha_creac: new Date(),
        idperfil,
        idPublicacion,
      });
    } catch (error) {
      console.error("Error al crear comentario:", error);
      return res.status(500).json({ error: "Error al crear comentario" });
    }
  }

  async obtenerComentariosPorPublicacion(req, res) {
    const idPublicacion = req.params.idPublicacion;

    try {
      const comentarios = await db.query("SELECT * FROM Comentario WHERE idPublicacion = ?", [idPublicacion]);

      res.json(comentarios[0]);
    } catch (error) {
      console.error("Error al obtener comentarios:", error);
      return res.status(500).json({ error: "Error al obtener comentarios" });
    }
  }
}

module.exports = new ComentarioController();