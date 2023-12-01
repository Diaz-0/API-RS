const db = require("../../CONEXION/db");

class ComentarioController {
  async crearComentario(req, res) {
    const { contenido, idperfil, idPublicacion } = req.body;

    try {
      // Insertar el nuevo comentario
      const resultComentario = await db.query("INSERT INTO Comentario SET ?", { contenido, idperfil, idPublicacion });
      
      const idComentario = resultComentario[0].insertId;

      // Relacionar el comentario con la publicación
      await db.query("INSERT INTO publicacion_comentarios SET ?", { idPublicacion, idComentario });

      res.json({
        idcomentario: idComentario,
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
      // Obtener los comentarios asociados con la publicación
      const comentarios = await db.query(`
        SELECT c.*
        FROM Comentario c
        INNER JOIN publicacion_comentarios pc ON c.idComentario = pc.idComentario
        WHERE pc.idPublicacion = ?
      `, [idPublicacion]);

      res.json(comentarios[0]);
    } catch (error) {
      console.error("Error al obtener comentarios:", error);
      return res.status(500).json({ error: "Error al obtener comentarios" });
    }
  }
}

module.exports = new ComentarioController();